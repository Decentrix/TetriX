const fs = require('fs');
const path = require('path');

module.exports = {
  /**
   * @function: extractContractNames()
   * @param: converted code in string
   * @description: compiles the contract
   * @return: object that has the contract's assembly code, bytecode, gasEstimates, opcodes
   *
   */
  extractContractNames: source => {
    const rgx = /^contract\s(.*)\s\{/gm;
    const contracts = source.match(rgx);
    const nameRgx = /\s(.*)\b/g;
    return (contractNames = contracts.map(contract => {
      return contract.match(nameRgx)[0].slice(1);
    }));
  },
  /**
   * @function: extractContent()
   * @param: third argument of process.argv
   * @description: extracts and convert code to string from .sol file
   * @return: converted code in string
   */
  // TODO: Test for cases where numArgs != 3
  extractContent: params => {
    const solRegex = /\.sol$/g;
    const contractPath = path.resolve(process.cwd(), params[0]);
    let source;
    if (contractPath.match(solRegex) && fs.existsSync(contractPath)) {
      source = fs.readFileSync(contractPath, 'utf8');
    } else {
      throw new Error('Path does not exist');
    }
    return source;
  },
  /**
   * @function: separateContracts()
   * @param: third argument of process.argv
   * @description: extracts and convert code to string from .sol file
   * @return: converted code in string
   */
  separateContracts: source => {
    const rgx = /^(?!\s)\}/gm;
    return source
      .split(rgx)
      .slice(0, -1)
      .map(contract => {
        return contract + '\n}';
      });
  },
};
