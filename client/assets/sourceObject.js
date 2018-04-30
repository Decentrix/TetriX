module.exports =  { 
      origContract: ["@pragma solidity ^4.0.0;","","contract myContract {","  uint8 a;","  uint256 b;","  uint8 c;","  uint8 d;","  bytes32[] e;","","  function myContract() {","    a = 1;","    b = 2;","    c = 3;","    d = \"hello\";","  }","  ","  function updateContract() {","    a = 2;","  }","  ","}"], 
      optContract: ["@pragma solidity ^4.0.0;","","contract myContract {","  uint8 a;","  uint256 b;","  uint8 c;","  uint8 d;","  bytes32[] e;","","  function myContract() {","    a = 1;","    b = 2;","    c = 3;","    d = \"hello\";","  }","  ","  function updateContract() {","    a = 2;","  }","  ","}"], 
      origCost,
      optCost,
      difference: NaN,};