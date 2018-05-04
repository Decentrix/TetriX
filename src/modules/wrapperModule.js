const fs = require('fs');
const path = require('path');

const WRAPPER_MODULE = {
  // TODO: Test for cases where code` has \n in string
  /**
   * @function name: createCodeStrArr()
   * @param: source - source contract code
   * @description: createCodeStrArr takes in the source contract code and returns
   * @return: array of string - source trimmed by newlines
   */
  createCodeStrArr: source => {
    // console.log('original sourceeeeeeeeeeeee', source);
    return source.trim().split('\n');
  },

  /**
   * @function name: assembleContent()
   * @param: origContent in string, optContent in string,
   *   origCost in int, optCost in int
   * @description: assembles object required to display contract codes
   *   in client
   * @return: content for client to use in string
   */
  assembleContent: (origContent, optContent, origCost, optCost) => {
    // console.log(`module.exports =  ${origContent}`);
    // TODO: FIX OPTCONTENT
    return `module.exports =  { 
      origContract: ${JSON.stringify(origContent)}, 
      optContract: ${JSON.stringify(origContent)}, 
      origCost,
      optCost,
      difference: ${origCost - optCost},};`;
  },

  /**
   * @function name: writeToFile()
   * @param: fileContent
   * @description: writes to file that contains the object assembled for client
   * @return: none
   */
  writeToFile: fileContent => {
    const filepath = path.resolve(__dirname, '../../client/assets/sourceObject.js');
    fs.writeFile(filepath, fileContent, err => {
      if (err) throw err;
      console.log(`The file was succesfully saved!`);
    });
  },
};

module.exports = WRAPPER_MODULE;
