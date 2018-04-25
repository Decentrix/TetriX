@pragma solidity ^4.0.0;

contract myContract {
  uint8 a;
  uint256 b;
  uint8 c;
  bytes32[] d;

  function myContract() {
    a = 1;
    b = 2;
    c = 3;
    d = "hello";
  }
  
  function updateContract() {
    a = 2;
  }
  
}
