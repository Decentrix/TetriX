#!/usr/bin/env node

const code = require('./src/code'); // Preps the contract for optimization
const opt = require('./src/opt'); // Optimizes contract
const contract = require('./src/contract'); // Contract related methods
const file = require('./src/file'); // Readies contract data for client
const app = require('./src/app');

const contractPath = file.extractPath(process.argv);
const oldSource = code.extractContent(contractPath);
const newSource = opt.optimize(oldSource);
const contractName = contract.getName(oldSource);

app.deploy(contractName, oldSource, newSource)
  .catch(err => {
    throw err;
  });
