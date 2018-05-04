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
		const rgx = /^contract\s(.*)\s\{/gm;
		const contracts = source.match(rgx);
		const nameRgx = /\s(.*)\b/g;
		const contractName = contracts.map((contract) => {
			return contract.match(nameRgx)[0].slice(1);
		})
    // const contractName = /^contract\s(.*)\s\{/gm.exec(source);
    // console.log(`contractName = ${contractName[1]}`);
    // second argument is the number of different contracts you are attempting to compile
    try {
      const contractData = solc.compile(source, 1).contracts[`:${contractName[1]}`];
      console.log(`Gas Estimate from SOLC = ${JSON.stringify(contractData.gasEstimates)}`);
      console.log(JSON.stringify(contractData));
      return ({ source, assembly, bytecode, gasEstimates, opcodes, interface } = contractData);
    } catch (error) {
      throw new Error('error in compile contract');
    }
    console.log(`contractName = ${contractName}`);
    // second argument is the number of different contracts you are attempting to compile
    const contractData = solc.compile(source, 1).contracts[`:${contractName[1]}`];
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
