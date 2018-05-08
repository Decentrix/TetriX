const childProcess = require('child_process');
const contract = require('./contract');
const file = require('./file');
const { BLUE, GREEN } = require('./utils/chalkSettings');

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
    const oldContractObj = await contract.compileContract(oldSource, contractName);
    oldGas = await contract.startTestNetwork(oldContractObj.bytecode, oldContractObj.interface);
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
    if (process.argv[3] === '-v') {
      childProcess.fork('node_modules/webpack/bin/webpack.js');
      childProcess.fork('server/server.js');
    }
  },
};
