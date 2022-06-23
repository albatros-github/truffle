//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("StarDucks Capu-Token", "SCT") public {
        _mint(msg.sender, initialSupply);
        //decimals();
    }

    //overrides amount of decimals from 10^(18) i.e. wei
    //function decimals() public view virtual override returns(uint8) {
      //  return(uint8(16));
    //}
}
