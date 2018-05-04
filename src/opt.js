const fs = require('fs');
const path = require('path');

module.exports = {
  /**
   * @function name: optimize()
   * @param: contract to be optimized (type string)
   * @description: sent to optimizer
   * @return: return optimized code as a string
   */
  optimize: function(str) {
		const arr = str.trim().split("\n");
		const beforeConstruct = str
			.substr(0, str.indexOf("constructor"))
			.trim()
			.split("\n");
		const afterConstruct = str.substr(str.indexOf('constructor'));
		const structs = [];
		let full = [];
		let others = [];
		let structName = "";
		let structFull = [];
		let structOthers = [];
		let inStruct = false;
		beforeConstruct.forEach(el => {
			el = el.trim();
			if (el.match(/^(struct).*/g) !== null) {
				inStruct = true;
				structName = el;
			} else if (el.match(/^[\}]/g) !== null && inStruct === true) {
				inStruct = false;
				structs.push(
					'\t',structName,'\n',
					'\t\t',this.optimizerOthers(structOthers).join('\n\t\t'),'\n',
					'\t\t',this.optimizerFull(structFull).join('\n\t\t'),'\n',
					'\t','}',
					'\n'
				);
				structName = "";
				structFull = [];
				structOthers = [];
			}
			if (inStruct === false) {
				if (
					el.match(
						/^(\d|\w*\[\])|^(bytes32)|^(uint256)|^(mapping)|^(int256)|^(int+\s)|^(uint+\s)|^(string+\s)|^(bytes+\s)/gm
					) !== null
				) {
					full.push(el);
				} else if (
					el.match(
						/^(uint\S*\b)|^(bytes\S*\b)|^(int\S*\b)|^(address)|^(bool)/gm
					) !== null
				) {
					others.push(el);
				}
			} else {
				if (
					el.match(
						/^(\d|\w*\[\])|^(bytes32)|^(uint256)|^(mapping)|^(int256)|^(int+\s)|^(uint+\s)|^(string+\s)|^(bytes+\s)/gm
					) !== null
				) {
					structFull.push(el);
				} else if (
					el.match(
						/^(uint\S*\b)|^(bytes\S*\b)|^(int\S*\b)|^(address)|^(bool)/gm
					) !== null
				) {
					structOthers.push(el);
				}
			}
		});
		others = this.optimizerOthers(others);
		full = this.optimizerFull(full);
	
		return [beforeConstruct.slice(0,3).join('\n')+'\n', structs.join('')+'\n',others.join('\n\t')+'\n\t',full.join('\n\t'),'\n\n'+afterConstruct].join('');
	},
  /**
   * @function name: optimizerFull()
   * @param: Accepts 32 bytes state variables (type array)
   * @description:	Rearrange 32 bytes state variables in the optimzer
   * @return:	Rearranged 32 bytes state variables array
   */
	optimizerFull: arr => {
		for (let i = 0; i < arr.length; i++) {
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
		const result = [];
		let orgArr = [];
		let byteSize = 0;
		let memory = 0;
		arr.forEach(el => {
			if (el.indexOf("uint") >= 0) {
				byteSize = parseInt(/uint(\d+)/gm.exec(el)[1]) / 8;
				orgArr.push([el, byteSize]);
			} else if (el.indexOf("int") >= 0) {
				byteSize = parseInt(/int(\d+)/gm.exec(el)[1]) / 8;
				orgArr.push([el, byteSize]);
			} else if (el.indexOf("bytes") >= 0) {
				byteSize = parseInt(/bytes(\d+)/gm.exec(el)[1]);
				orgArr.push([el, byteSize]);
			} else if (el.indexOf("address") >= 0) {
				orgArr.push([el, 20]);
			} else if (el.indexOf("bool") >= 0) {
				orgArr.push([el, 1]);
			}
		});
		orgArr.sort((a, b) => {
			return a[1] - b[1];
		});
		while (orgArr.length > 0) {
			if (memory === 0) {
				for (let i = 0; i < orgArr.length; i++) {
					if (orgArr[i][0].indexOf("int") >= 0 && orgArr[i][1] < 12) {
						result.push(orgArr[i][0]);
						memory += orgArr[i][1];
						orgArr = [...orgArr.slice(0, i), ...orgArr.slice(i + 1)];
					}
				}
				if(memory === 0) {
					result.push(orgArr[0][0]);
					memory += orgArr[0][1];
					orgArr.shift();
				}
			} else {
				for (let i = orgArr.length - 1; i >= 0; i--) {
					if (orgArr[i][1] + memory < 32) {
						result.push(orgArr[i][0]);
						memory += orgArr[i][1];
						orgArr = [...orgArr.slice(0, i), ...orgArr.slice(i + 1)];
					}
				}
				memory = 0;
			}
		}
		return result;
	}
};
