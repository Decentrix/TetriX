const fs = require('fs');
const path = require('path');
const solc = require('solc');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const chalkSettings = require('./utils/chalkSettings');
const BLUE = chalkSettings.blue;

const provider = ganache.provider();
const web3 = new Web3(provider);

const getAccounts = () => {
  return new Promise((resolve, reject) => {
    resolve(web3.eth.getAccounts());
  });
};

const testDeploy = accounts => {
  return new Promise((resolve, reject) => {
    let contract = new web3.eth.Contract(JSON.parse(interface))
      .deploy({
        data: bytecode,
        arguments: [],
      })
      .send({
        from: accounts[0],
        gas: '1000000',
      });
    resolve(contract);
  });
};

const getAddress = contract => {
  return new Promise((resolve, reject) => {
    console.log(`${BLUE('CONTRACT ADDRESS =')} ${contract.options.address}`);
    resolve(contract);
  });
};

  /**
   * @function: getGasEstimate()
   * @param: { String } contract
   * @description: estimates gas using web3
   * @return: { Integer } gas estimate
   */
const getGasEstimate = async contract => {
  let gas = await web3.eth.estimateGas({ data: bytecode });
  return web3.eth.estimateGas({ data: bytecode });
};

module.exports = {
  /**
   * @function: getName()
   * @param: { String } source
   * @description: picks up contract's name
   * @return: { String } returns contract's name
   */
  getName: source => {
    const rgx = /^contract\s(.*)\s\{/gm;
    const contracts = source.match(rgx);
    const nameRgx = /\s(.*)\b/g;
    const contractName = contracts.map(contract => {
      return contract.match(nameRgx)[0].slice(1);
    });
    console.log(`${BLUE('CONTRACT NAME =')} ${contractName[0]}`);
    return contractName[0];
  },

  /**
   * @function: compileContract()
   * @param: 
   *   { String } source: converted code
   *   { String } contractName: name of contract
   * @description: compiles the contract
   * @return: { Objects } contract's data
   */
  compileContract: async (source, contractName) => {
    try {
      // second argument is the number of different contracts you are attempting to compile
      const contractData = solc.compile(source, 1).contracts[`:${contractName}`];
      // console.log(source);
      return ({ source, assembly, bytecode, opcodes, interface } = contractData);
    } catch (error) {
      throw new Error('error in compile contract');
    }
  },

  /**
   * @function: startTestNetwork()
   * @param:
   *   { String } bytecode
   *   { String } interface
   * @description: starts test network in Ganache
   *   1. getAccounts
   *   2. testDeploy
   *   3. getGasEstimate from test deployment
   * @return: new Promise
   */
  startTestNetwork: (bytecode, interface) => {
    return new Promise((resolve, reject) => {
      getAccounts()
        .then(myAccounts => testDeploy(myAccounts))
        .then(myContract => getAddress(myContract))
        .then(myContract => resolve(getGasEstimate()));
    });
  },
};
