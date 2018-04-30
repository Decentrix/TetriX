const path = require('path');
const fs = require('fs');

const params = process.argv.slice(2);
const solRegex = /\.sol$/g;

const contractPath = path.resolve(process.cwd(), params[0]);

let source;
if (contractPath.match(solRegex) && fs.existsSync(contractPath)) {
  source = fs.readFileSync(contractPath, 'utf8');
  const stat = fs.statSync(contractPath);
} else {
  throw new Error('Path does not exist');
}

module.exports = source;
