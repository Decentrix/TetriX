/**
 * @fileOverview
 * 1. PREP CONTRACT
 *    A. @function pM.extractCode() Extract contract out of .sol file // DONE
 *    B. @function pM.parseContract() Parse through contract // TODO: EK
 *    C. @function pM.assembleContent() Send to JW contract state vars as an array of objects { type, varName } // TODO: EK
 * 2. OPTIMIZE CONTRACT
 *    A. @function oM.optimize() Optimize the contract // TODO: JW
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

const path = require('path');
const fs = require('fs');

const arg = process.argv.slice(2);
const PREPPER = require('./src/modules/prepperModule');
const OPTIMIZER = require('./src/modules/optimizerModule');
const WRAPPER = require('./src/modules/wrapperModule');

const source = PREPPER.extractCode(arg); //1A
const codeArr = WRAPPER.createCodeStrArr(source); // 2
const origContent = WRAPPER.assembleContent(codeArr); // 3
const optContent = OPTIMIZER.optimize(origContent);
// TODO: do stuff with the second contract copy
WRAPPER.writeToFile(origContent, optContent);
