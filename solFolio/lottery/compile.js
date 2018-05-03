// we can't use a require statement as if the .sol file is javascript

const path = require('path');
const fs = require('fs');
const solc = require('solc');

const lotteryPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(lotteryPath, 'utf8');

// second argument is the number of different contracts you are attempting to compile
// console.log(solc.compile(source, 1).contracts[':Inbox'].bytecode);
module.exports = solc.compile(source, 1).contracts[':Lottery']; // which contains the bytecode interface
