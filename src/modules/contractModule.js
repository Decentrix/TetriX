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

const CONTRACT_MODULE = {
  /**
   * @function name: compileContract()
   * @param: converted code in string
   * @description: compiles the contract
   * @return: object that has the contract's assembly code, bytecode, gasEstimates, opcodes
   *
   */
  compileContract: source => {
    const contractName = /^contract\s(.*)\s\{/gm.exec(source);
    console.log(`contractName = ${contractName}`);
    // const contractName = /^(?!\/\/)\s+contract\s(.*)\s\{/gm.exec(source);
    // second argument is the number of different contracts you are attempting to compile
    const contractData = solc.compile(source, 1).contracts[`:${contractName[1]}`];
    console.log(`Gas Estimate from SOLC = ${JSON.stringify(contractData.gasEstimates)}`);
    return ({ source, assembly, bytecode, gasEstimates, opcodes, interface } = contractData);
  },

  /**
   * @function name: startTestNetwork
   * @param:
   */
  startTestNetwork: (bytecode, interface) => {
    function getAccounts() {
      return new Promise((resolve, reject) => {
        resolve(web3.eth.getAccounts());
      });
    }
    // getAccounts();

    // accounts = await web3.eth.getAccounts();

    // myContract = await new web3.eth.Contract(JSON.parse(interface))
    //   .deploy({ data: bytecode })
    //   .send({
    //     from: accounts[0],
    //     gas: '1000000',
    //   });

    // web3.eth.getAccounts(function(error, result) {
    //   if (error != null) console.log('Could not get accounts');
    //   console.log(result[0]);
    // });

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
        console.log(`Contract Address = ${contract.options.address}`);
        resolve(contract);
      });
    }

    async function getGasEstimate() {
      console.log('bytecode', bytecode);
      let gasEstimate = await web3.eth.estimateGas({ data: bytecode });
      console.log(`Gas Estimate from WEB3 = ${gasEstimate}`);
    }

    getAccounts()
      .then(myAccounts => testDeployContract(myAccounts))
      .then(myContract => getContractAddress(myContract))
      .then(() => getGasEstimate());
  },

  estimateGas: bytecode => {
    console.log('estimating gas');

    let gasEstimate = web3.eth.estimateGas({ data: bytecode });
    console.log('GAS ESTIMATE\n', gasEstimate);
  },
};

module.exports = CONTRACT_MODULE;
