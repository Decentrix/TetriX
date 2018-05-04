#!/usr/bin/env node
/**
 * @fileOverview
import OptimizedContract from "./client/src/components/OptimizedContract";


import OgCodeContainer from "./client/src/components/OgCodeContainer";


 * 1. PREP CONTRACT
 *    A. @function pM.extractCode() Extract contract out of .sol file // DONE
 *    B. @function pM.parseContract() Parse through contract // TODO: EK
 *    C. @function pM.assembleContent() Send to JW contract state vars as an array of objects { type, varName } // TODO: EK
 * 2. OPTIMIZE CONTRACT
 *    A. @function oM.optimize() Optimize the contract // TODO: JW
 * 3. DEPLOY CONTRACT
 *    A. @function cM.compileContract() Compile contract with solc
 *    B. 
 *    B. Local Test Network
 *       i. @function oM.startTestNetwork() Start local test network for both contracts // TODO: PSC
 *       ii. @function oM.wrapContractData() // TODO
 *           1. Return gas costs for both contracts
 *           2. and wrap contracts as an object array
 * 3. WRAP CONTRACT
 *    A. @function wM.createCodeStrArr() Convert original and optimized contract into an array of string // FIXME HALFDONE PSC
 *    B. @function wM.assembleContent() Assemble actual object required to display contract codes in client // DONE
 *    C. @function wM.writeToFile() Write to file the assembled content
 */
if (process.argv[2] === '-v') {
  const childProcess = require('child_process');
  childProcess.fork('server/server.js');
} else {
  // const path = require('path');
  // const fs = require('fs');
  // const PREPPER = require('./src/modules/prepperModule'); // Preps the contract for optimization
  // const OPTIMIZER = require('./src/modules/optimizerModule'); // Optimizes contract
  // const CONTRACT = require('./src/modules/contractModule'); // Contract related methods
  // const WRAPPER = require('./src/modules/wrapperModule'); // Readies contract data for client

  const code = require('./src/code'); // Preps the contract for optimization
  const opt = require('./src/opt'); // Optimizes contract
  const contract = require('./src/contract'); // Contract related methods
  const file = require('./src/file'); // Readies contract data for client
  //---------\\

  (async function() {
    const contractPath = process.argv.slice(2); // STEP 1
		console.log(`CONTRACT PATH = ${contractPath}`);
		const oldSource = code.extractCode(contractPath); // STEP 2
		
		// const newSource = opt.optimize(oldSource); // STEP 3
		
    // const oldStrArr = file.createCodeStrArr(oldSource); // STEP 4
    // const newStrArr = file.createCodeStrArr(newSource); // STEP 4

    const oldContractObj = await contract.compileContract(oldSource); // STEP 5A
    // oldGas = await contract.startTestNetwork(oldContractObj.bytecode, oldContractObj.interface); // STEP 5B
    // const newContractObj = await contract.compileContract(newSource); // STEP 5A
    // newGas = await contract.startTestNetwork(newContractObj.bytecode, newContractObj.interface); // STEP 5B

    // file.writeToFile(oldContractObj, newContractObj, oldStrArr, newStrArr, oldGas, newGas); // STEP 6
  })();
}
