// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


contract SimpleStorage {
uint number =0;
address owner = msg.sender;

  constructor(uint _num) {
    number = _num;
  }

  function getNumber() public view returns(uint){
    return number;
  }
//verify the state is changeable
function setNumber(uint x) public returns(bool){
    require(msg.sender == owner ,"Not the onwer");
    number = x;
    return true;
}
}
