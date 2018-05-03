module.exports =  {
      origContract: ["@pragma solidity ^4.0.0;","","contract myContract {","  uint8 a;","  uint256 b;","  uint8 c;","  bytes32[] d;","","  function myContract() {","    a = 1;","    b = 2;","    c = 3;","    d = \"hello\";","  }","  ","  function updateContract() {","    a = 2;","  }","  ","}"], 
      optContract: ["@pragma solidity ^4.0.0;","","contract myContract {","  uint256 b;","  uint8 c;","  bytes32[] d;", "  uint8 a;", "","  function myContract() {","    a = 1;","    b = 2;","    c = 3;","    d = \"hello\";","  }","  ","  function updateContract() {","    a = 2;","  }","  ","}"], 
      origCost: [403500, ' gas'],
      optCost: [320000, ' gas'],
      difference: [83500, ' gas']
};