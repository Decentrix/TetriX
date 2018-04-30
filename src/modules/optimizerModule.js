const fs = require('fs');
const path = require('path');

const OPTIMIZER_MODULE = {
  optimize: (source) => {
    let newSource = Object.assign(source);
    return newSource;
    
  },
  startTestNetwork: () => {

  },
  wrapContractData: () => {

  },
};

module.exports = OPTIMIZER_MODULE;
