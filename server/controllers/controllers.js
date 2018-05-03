const source = require('./../../src/parser.js');

console.log(source);

const pmController = {
	optimizer: (arr) => {
		const result = [];
		arr.map((el) => {
			if(Object.keys(el)[0].match(/(uint256)|(bytes32)|(mapping)|(\[\])|(int256)|(int+\s)|(uint+\s)|/gm)) {
				console.log(el);
			}
		})
	}
}