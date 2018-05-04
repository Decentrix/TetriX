#!/usr/bin/env node
/**
 * @fileOverview
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
if(process.argv[2] === '-v') {
	const childProcess = require('child_process');
	childProcess.fork('server/server.js');
} else {
	const path = require('path');
	const fs = require('fs');
	const PREPPER = require('./src/modules/prepperModule'); // Preps the contract for optimization
	const OPTIMIZER = require('./src/modules/optimizerModule'); // Optimizes contract
	const CONTRACT = require('./src/modules/contractModule'); // Contract related methods
	const WRAPPER = require('./src/modules/wrapperModule'); // Readies contract data for client

	const contractPath = process.argv.slice(2);
	const source = PREPPER.extractCode(contractPath); // 1A
	const codeArr = WRAPPER.createCodeStrArr(source); // 2
	const origContent = WRAPPER.assembleContent(codeArr); // 
	// FIXME
	const optContent = OPTIMIZER.optimize(source); // returns optimized contract as a string
	const origContractObj = CONTRACT.compileContract(source);
	// console.log(origContractObj.assembly);
	CONTRACT.startTestNetwork(origContractObj.bytecode, origContractObj.interface);
		
		// console.log(contractObj.bytecode);
		
		// CONTRACT.estimateGas(contractObj.bytecode);
		// console.log(optContent);
		
		
		// TODO: do stuff with the second contract copy
	WRAPPER.writeToFile(origContent, optContent);
}
