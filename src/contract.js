const fs = require('fs');
const path = require('path');
const solc = require('solc');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
let accounts;
let myContract;
let origContract;
let newContract;

const getAccounts = () => {
  return new Promise((resolve, reject) => {
    resolve(web3.eth.getAccounts());
  });
};

const testDeployContract = accounts => {
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

const getContractAddress = contract => {
  return new Promise((resolve, reject) => {
    // console.log('contract', contract);
    console.log(`Contract Address = ${contract.options.address}`);
    resolve(contract);
  });
};

const getGasEstimate = async contract => {
  let gas = await web3.eth.estimateGas({ data: bytecode });
  return web3.eth.estimateGas({ data: bytecode });
};

module.exports = {

  /**
   * @function name: compileContract()
   * @param: converted code in string
   * @description: compiles the contract
   * @return: object that has the contract's assembly code, bytecode, gasEstimates, opcodes
   *
   */
  compileContract: async source => {
    const rgx = /^contract\s(.*)\s\{/gm;
    const contracts = source.match(rgx);
    const nameRgx = /\s(.*)\b/g;
    const contractName = contracts.map(contract => {
      return contract.match(nameRgx)[0].slice(1);
    });
    console.log('contractName = ', contractName);
    // second argument is the number of different contracts you are attempting to compile
    try {
      const contractData = solc.compile(source, 1).contracts[`:${contractName[0]}`];
      // console.log(source);
      return ({ source, assembly, bytecode, opcodes, interface } = contractData);
    } catch (error) {
      throw new Error('error in compile contract');
    }
  },

  /**
   * @function name: startTestNetwork
   * @param: bytecode, interface from contractData
   */
  startTestNetwork: (bytecode, interface) => {
    return new Promise((resolve, reject) => {
      getAccounts()
        .then(myAccounts => testDeployContract(myAccounts))
        .then(myContract => getContractAddress(myContract))
        .then(myContract => resolve(getGasEstimate()));
    });
  },
};
