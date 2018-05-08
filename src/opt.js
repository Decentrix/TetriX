const fs = require('fs');
const path = require('path');

module.exports = {
  /**
   * @function name: optimize()
   * @param: contract to be optimized (type string)
   * @description: parses through and organizes data types by bytes in its 
	 *   corresponding array ( full, others, structName, structFull )
	 *   which will later be optimized in optimizerFull and optimizerOthers
   * @return: { String } optimized code
   */
  optimize: function(str) {
		const beforeConstruct = str
			.substr(0, str.indexOf("constructor"))
			.trim()
			.split("\n");	//Content before Constructor
		const afterConstruct = str.substr(str.indexOf('constructor'));	//Content after Constructor
		const structs = []; //Storage for all declared structs 
		let full = [];	//Storage for all 32bytes variables
		let others = [];	//Storage for all non-32bytes variables
		let structName = ""; //structName 
		let structFull = []; //Storage for all 32bytes struct variables
		let structOthers = [];	//Storage for all non-32bytes struct variables
		let inStruct = false;	//Check if parser inside of Struct
		beforeConstruct.forEach(el => {	//iterating through each line of code before Constructor
			el = el.trim();		
			if (el.match(/^(struct).*/g) !== null) {	// Check if parser reaches a Struct
				inStruct = true;
				structName = el;
			} else if (el.match(/^[\}]/g) !== null && inStruct === true) {	// Check if parser reaches end of a Struct
				inStruct = false;
				structs.push(
					'  ',structName,'\n',
					'    ',this.optimizerOthers(structOthers).join('\n    '),'\n',
					'    ',this.optimizerFull(structFull).join('\n    '),'\n',
					'  ','}',
					'\n'
				);
				structName = "";	//Clear Struct info for any new Struct
				structFull = [];
				structOthers = [];
			}
			const rgxFull = /^(\d|\w*\[\])|^(bytes32)|^(uint256)|^(mapping)|^(int256)|^(int+\s)|^(uint+\s)|^(string+\s)|^(bytes+\s)/gm;
			const rgxOthers = /^(uint\S*\b)|^(bytes\S*\b)|^(int\S*\b)|^(address)|^(bool)/gm;
			if (inStruct === false) {	// Check if parser reaches non-Struct variables
				if ( el.match( rgxFull	) !== null ) {	//Check if variable is 32bytes
					full.push(el);
				} else if ( el.match( rgxOthers	) !== null ) {	//Check if variable is non-32bytes
					others.push(el);
				}
			} else {	//check if parser reaches Struct variables
				if ( el.match( rgxFull ) !== null) {	//Check if variable is 32 bytes
					structFull.push(el);
				} else if ( el.match( rgxOthers ) !== null ) {	//Check if variable is non-32Bytes
					structOthers.push(el);
				}
			}
		});
		others = this.optimizerOthers(others);	//Run optimizers on the global non-32bytes variables
		full = this.optimizerFull(full);	//run optimizers on the global 32-bytes variables
	
		return [beforeConstruct.slice(0,3).join('\n')+'\n', structs.join('')+'\n','  '+others.join('\n  ')+'\n  ',full.join('\n  '),'\n\n'+'  '+afterConstruct].join('');
	},
  /**
   * @function name: optimizerFull()
   * @param: { Array } accepts 32 bytes state variables
   * @description: rearrange 32 bytes state variables in the optimzer
   * @return:	{ Array } rearranged 32 bytes state variables array
   */
	optimizerFull: arr => {
		for (let i = 0; i < arr.length; i++) {	//Rearranges by putting uint/int variables in the beginning to save gas
			if (arr[i].match(/uint.*\b/g) !== null) {
				const tmp = arr.splice(i, 1);
				arr.unshift(tmp);
			}
		}
		return arr;
	},

	/**
   * @function name: optimizerOthers()
   * @param: Accepts non-32 bytes state variables (type array)
   * @description:	Rearrange non-32 bytes state variables in the optimzer
   * @return:	Rearranged non-32 bytes state variables array
   */

	optimizerOthers: arr => {
		const result = [];	//result arr for rearranged variables
		let orgArr = [];	//original arr for non-32bytes variables
		let byteSize = 0;	//byteSize of variables
		let memory = 0;	//memory counter 
		arr.forEach(el => {
			if (el.indexOf("uint") >= 0) {	//check if variable is uint
				byteSize = parseInt(/uint(\d+)/gm.exec(el)[1]) / 8;
				orgArr.push([el, byteSize]);
			} else if (el.indexOf("int") >= 0) {	//check if variable is int
				byteSize = parseInt(/int(\d+)/gm.exec(el)[1]) / 8;
				orgArr.push([el, byteSize]);
			} else if (el.indexOf("bytes") >= 0) {	//check if variable is bytes
				byteSize = parseInt(/bytes(\d+)/gm.exec(el)[1]);
				orgArr.push([el, byteSize]);
			} else if (el.indexOf("address") >= 0) {	//check if variable is address
				orgArr.push([el, 20]);
			} else if (el.indexOf("bool") >= 0) {	//check if variable is bool
				orgArr.push([el, 1]);
			}
		});
		orgArr.sort((a, b) => {	//Sorting based on memory size from least to greatest
			return a[1] - b[1];
		});
		while (orgArr.length > 0) {
			if (memory === 0) {	//Check if parser is starting a new memory stack
				for (let i = 0; i < orgArr.length; i++) {
					if (orgArr[i][0].indexOf("int") >= 0 && orgArr[i][1] < 12) {	//check if variable is int/uint and less than 12 bytes so it can accept an address after it
						result.push(orgArr[i][0]);	//if so, push the first variable in the list
						memory += orgArr[i][1];	//increment memory counter;
						orgArr = [...orgArr.slice(0, i), ...orgArr.slice(i + 1)];	//remove pushed variables
					}
				}
				if(memory === 0) {	//check if there were any uint/int variable under 12bytes in memory
					result.push(orgArr[0][0]);	//if not, push the first variable in the list
					memory += orgArr[0][1];	//increment memory counter;
					orgArr.shift();	//remove pushed variables
				}
			} else {
				for (let i = orgArr.length - 1; i >= 0; i--) {	//Iterate from the back to get the variable with the largest memory size
					if (orgArr[i][1] + memory < 32) {	//check if memory exceed 32 after adding 
						result.push(orgArr[i][0]);	//if not, push to the variable stack
						memory += orgArr[i][1];	// increment memory counter
						orgArr = [...orgArr.slice(0, i), ...orgArr.slice(i + 1)];	//remove variable
					}
				}
				memory = 0;	//reset memory counter to 0 after no variables can be added.
			}
		}
		return result;
	}
};
