const fs = require('fs');
const path = require('path');

const OPTIMIZER_MODULE = {
  /**
   * @function name: optimize()
   * @param: contract to be optimized (in string)
   * @description: sent to optimizer (Joseph)
   * @return: return optimized code as a string
   */
  optimize: (source) => {
    let newSource = Object.assign(source);
    return newSource;
    
  },
  /**
   * @function name: wrapContractData()
   * @param:
   * @description:
   * @return:
   */
  wrapContractData: () => {

  },
};

module.exports = OPTIMIZER_MODULE;
