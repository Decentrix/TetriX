#!/usr/bin/env node

const code = require('./src/code'); // Preps the contract for optimization
const opt = require('./src/opt'); // Optimizes contract
const contract = require('./src/contract'); // Contract related methods
const file = require('./src/file'); // Readies contract data for client
const app = require('./src/app');
const childProcess = require('child_process');
if (process.argv[3] === '-v') childProcess.fork('node_modules/webpack/bin/webpack.js --config node_modules/tetrix/webpack.config.js');
const contractPath = file.extractPath(process.argv);
const oldSource = code.extractContent(contractPath);
const newSource = opt.optimize(oldSource);
const contractName = contract.getName(oldSource);

app.deploy(contractName, oldSource, newSource)
  .catch(err => {
    throw err;
  });
