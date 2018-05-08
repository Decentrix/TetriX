const fs = require('fs');
const path = require('path');
const settings = require('./chalkSettings')

module.exports = {
    /**
   * @function: extractPath()
   * @param: { String } argument
   * @description: container functionality for deploying and writing to file the contract
   * @return: none
   * @todo: TODO test for cases where number of arguments does not match requirement
   */
  extractPath: argv => {
    let contractPath = argv.slice(2);
    console.log(`${settings('CONTRACT PATH =')} ${contractPath}`);
    return contractPath;
  },

  /**
   * @name: createCodeStrArr
   * @param: { String } - content of contract
   * @description: cuts contract by newline
   * @return: { String } source trimmed by newlines
   * @todo: test for cases where code has \n in string
   */
  createCodeStrArr: source => {
    return source.trim().split('\n');
  },

  // /**
  //  * @function name: assembleContent()
  //  * @param: origContent in string, optContent in string,
  //  *   origCost in int, optCost in int
  //  * @description: assembles object required to display contract codes
  //  *   in client
  //  * @return: content for client to use in string
  //  */
  // assembleFile: (oldContract, newContract, oldGas, newGas) => {
  //   return `module.exports =  { 
  //     oldContract: ${JSON.stringify(oldContract)}, 
  //     newContract: ${JSON.stringify(newContract)}, 
  //     oldGas,
  //     newGas,
  //     difference: ${oldGas - newGas},};`;
  // },

  /**
   * @function: writeToFile()
   * @param:
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
			name: ${contractName},
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
