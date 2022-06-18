//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Greeter {

    string public greeting;

    event GreetingSet(address _caller, string _greeting);

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function setGreeting(string memory _greeting) external {
        greeting = _greeting;
        emit GreetingSet(msg.sender, _greeting);
    }

}
