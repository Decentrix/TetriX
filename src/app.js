const childProcess = require('child_process');
const chalk = require('chalk');
const contract = require('./contract');
const file = require('./file');
const settings = require('./chalkSettings')

module.exports = {
  deploy: async (contractName, oldSource, newSource) => {
    const oldContractObj = await contract.compileContract(oldSource, contractName);
    oldGas = await contract.startTestNetwork(oldContractObj.bytecode, oldContractObj.interface);
    const newContractObj = await contract.compileContract(newSource, contractName);
    newGas = await contract.startTestNetwork(newContractObj.bytecode, newContractObj.interface);
    console.log(`${settings('ORIGINAL GAS ESTIMATE =')} ${oldGas}`);
    console.log(`${settings('OPTIMIZED GAS ESTIMATE =')} ${newGas}`);
    console.log(`${settings('DIFFERENCE =')} ${chalk.green(oldGas - newGas)}`);

    oldStrArr = file.createCodeStrArr(oldSource);
    newStrArr = file.createCodeStrArr(newSource);
    
    file.writeToFile(
      Object.assign({ contractName }, oldContractObj),
      Object.assign({ contractName }, newContractObj),
      oldStrArr,
      newStrArr,
      oldGas,
      newGas
    );
  },

  runVisualization: async () => {
    if (process.argv[3] === '-v') {
      childProcess.fork('node_modules/webpack/bin/webpack.js');
      childProcess.fork('server/server.js');
    }
  },
};
