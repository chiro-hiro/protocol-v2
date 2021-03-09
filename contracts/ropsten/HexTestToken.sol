pragma solidity ^0.6.7;

import "./token.sol";

contract HexTestToken is DSToken {

    constructor(bytes32 symbol_, bytes32 name_, uint8 decimals_, uint256 supply_) public DSToken(symbol_) {
    	_setupDecimals(decimals_);
    	setName(name_);
    	mint(msg.sender, supply_);
    }

    //constructor(bytes32 symbol_, uint8 decimals_) public DSToken(symbol_) {
     //   _setupDecimals(decimals_);
    //	setName(name_);
    //	mint(msg.sender, supply_);
    //}

    function giveMe(uint wad) public {
        mint(msg.sender, wad);
    }

	/**
     * @dev Sets {decimals} to a value other than the default one of 18.
     *
     * WARNING: This function should only be called from the constructor. Most
     * applications that interact with token contracts will not expect
     * {decimals} to ever change, and may work incorrectly if it does.
     */
    function _setupDecimals(uint8 decimals_) internal {
        decimals = decimals_;
    }
}
