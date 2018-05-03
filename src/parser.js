const source = require('./extractor');
const dataTypeChecker = require('./utils/dataTypeChecker');
const words = source.trim().split('\n');

//TODO: Test for cases where code has \n in string

const saveDataType = () => {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i]);
  }
  return result;
};

module.exports = saveDataType;
