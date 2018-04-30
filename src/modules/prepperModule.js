const fs = require('fs');
const path = require('path');

const PREPPER_MODULE = {
  /**
   * @function name: extractCode()
   * @param: third argument of process.argv
   * @description: extracts and convert code to string from .sol file
   * @return: converted code in string
   */
  // TODO: Test for cases where numArgs != 3
  extractCode: params => {
    const solRegex = /\.sol$/g;
    const contractPath = path.resolve(process.cwd(), params[0]);
    let source;
    if (contractPath.match(solRegex) && fs.existsSync(contractPath)) {
      source = fs.readFileSync(contractPath, 'utf8');
      const stat = fs.statSync(contractPath);
    } else {
      throw new Error('Path does not exist');
    }
    return source;
  },
  
  /**
   * @function name: parseContract()
   * @param: contract as a string
   * @description: parses through contract and creates an object ready for optimizer
   * @return: array of objects { type, varName }
   */
  parseContract: source => {},

  /**
   * @function name: parseArr()
   * @param:
   * @description:
   * @return:
   */
  parseArr: () => {},
};

module.exports = PREPPER_MODULE;
