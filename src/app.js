const childProcess = require('child_process');
const contract = require('./contract');
const file = require('./file');
const { BLUE, GREEN, RED } = require('./utils/chalkSettings');

module.exports = {
  /**
   * @function: deploy()
   * @param:
   *   { String } contractName: name of contract
   *   { String } oldSource: content of original contract
   *   { String } newSource: content of optimized contract
   * @description: container functionality for deploying and writing to file the contract
   * @return: none
   */
  deploy: async (contractName, oldSource, newSource) => {
    console.log(`${BLUE('DEPLOYING ORIGINAL CONTRACT')}`);
    const oldContractObj = await contract.compileContract(oldSource, contractName);
    oldGas = await contract.startTestNetwork(oldContractObj.bytecode, oldContractObj.interface);
    console.log(`${BLUE('DEPLOYING OPTIMIZED CONTRACT')}`);
    const newContractObj = await contract.compileContract(newSource, contractName);
    newGas = await contract.startTestNetwork(newContractObj.bytecode, newContractObj.interface);
    console.log(`${BLUE('ORIGINAL GAS ESTIMATE =')} ${oldGas}`);
    console.log(`${BLUE('OPTIMIZED GAS ESTIMATE =')} ${newGas}`);
    console.log(`${BLUE('DIFFERENCE =')} ${GREEN(oldGas - newGas)}`);
		const oldStrArr = file.createCodeStrArr(oldSource);
		const newStrArr = file.createCodeStrArr(newSource);
		

    file.writeToFile(
			contractName,
      oldContractObj,
      newContractObj,
      oldStrArr,
      newStrArr,
      oldGas,
      newGas
    );
  },

  /**
   * @function: runVisualization()
   * @param: none
   * @description: runs visualization (webpack + run server) if requested in argument
   * @return: none
   */
  runVisualization: async () => {
		console.log(__dirname+"<----- i'm here");
			try {
				childProcess.fork('node_modules/tetrix/server/server.js');
			} catch(err) {
				throw err;
			}
  },
};
