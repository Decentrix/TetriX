const fs = require('fs');
const path = require('path');
const settings = require('./chalkSettings');

module.exports = {
  extractPath: argv => {
    let contractPath = argv.slice(2);
    console.log(`${settings('CONTRACT PATH =')} ${contractPath}`);
    return contractPath;
  },
  // TODO: Test for cases where code` has \n in string
  /**
   * @name: createCodeStrArr
   * @param: source - source contract code
   * @description: createCodeStrArr takes in the source contract code and returns
   * @return: array of string - source trimmed by newlines
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
   * @function name: writeToFile()
   * @param: fileContent
   * @description: writes to file that contains the object assembled for client
   * @return: none
   */
  writeToFile: (oldContract, newContract, oldSource, newSource, oldGas, newGas) => {
    const filepath = path.resolve(__dirname, '../client/assets/sourceObject.js');
    const fileContent = 
    `module.exports =  { 
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
