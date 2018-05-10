const fs = require('fs');
const path = require('path');
const { BLUE } = require('./utils/chalkSettings');

module.exports = {
    /**
   * @function: extractPath()
   * @param: { String } argument
   * @description: container functionality for deploying and writing to file the contract
   * @return: none
   * @todo: TODO test for cases where number of arguments does not match requirement
   */
  extractPath: argv => {
    let contractPath = argv[2];
    console.log(`${BLUE('CONTRACT PATH =')} ${contractPath}`);
    return contractPath;
  },

  /**
   * @name: createCodeStrArr
   * @param: { String } - content of contract
   * @description: cuts contract by newline
   * @return: { Array of String } source trimmed by newlines
   * @todo: test for cases where code has \n in string
   */
  createCodeStrArr: source => {
    return source.trim().split('\n');
  },

  /**
   * @function: writeToFile()
   * @param:
   *   { String } contractName: name of contract
   *   { Object } oldContract: data for original contract
   *   { Object } newContract: data for optimized contract
   *   { String } oldSource: content for original contract
   *   { String } oldContract: content for optimized contract
   *   { Integer } oldGas: gas cost for original contract
   *   { Integer } newGas: gas cost for optimized contract
   * @description: writes to file that holds data object assembled for visualization
   * @return: none
   */
  writeToFile: (contractName, oldContract, newContract, oldSource, newSource, oldGas, newGas) => {
    const filepath = path.resolve(__dirname, '../client/assets/sourceObject.js');
    const fileContent = 
    `module.exports =  { 
      name: ${JSON.stringify(contractName)},
      oldContract: {
        info: ${JSON.stringify(oldContract)}, 
        source: ${JSON.stringify(oldSource)},
        gasEst: ${oldGas},
      },
      newContract: {
        info: ${JSON.stringify(newContract)}, 
        source: ${JSON.stringify(newSource)},
        gasEst: ${newGas},
      },
      difference: ${oldGas - newGas},
    };`;
    fs.writeFile(filepath, fileContent, err => {
      if (err) throw err;
      console.log(`The file was succesfully saved!`);
    });
  },
};
