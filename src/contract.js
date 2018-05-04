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

function getAccounts() {
  return new Promise((resolve, reject) => {
    resolve(web3.eth.getAccounts());
  });
}

function testDeployContract(accounts) {
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
}

function getContractAddress(contract) {
  return new Promise((resolve, reject) => {
    // console.log('contract', contract);
    console.log(`Contract Address = ${contract.options.address}`);
    resolve(contract);
  });
}

async function getGasEstimate(contract) {
  let gas = await web3.eth.estimateGas({ data: bytecode });
  return web3.eth.estimateGas({ data: bytecode });
}

module.exports = {
  /**
   * @function name: compileContract()
   * @param: converted code in string
   * @description: compiles the contract
   * @return: object that has the contract's assembly code, bytecode, gasEstimates, opcodes
   *
   */
  compileContract: async source => {
    const contractName = /^contract\s(.*)\s\{/gm.exec(source);
    console.log(`contractName = ${contractName[1]}`);
    // second argument is the number of different contracts you are attempting to compile
    try {
      const contractData = solc.compile(source, 1).contracts[`:${contractName[1]}`];
      // console.log(source);
      return ({ source, assembly, bytecode, opcodes, interface } = contractData);
    } catch (error) {
      throw new Error('error in compile contract');
    }
  },

  /**
   * @function name: startTestNetwork
   * @param:
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
