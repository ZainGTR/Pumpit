// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/// @title ERC20 Token
contract ERC20Token is ERC20 {
    address public creator;
    constructor(
        string memory name,
        string memory symbol,
        uint256 _totalTokens,
        address swapContract,
        address _creator,
        address delegationRegistry
    ) ERC20(name, symbol) {
        _mint(swapContract, _totalTokens); // Mint all tokens to the swap contract
        creator = _creator;
        delegationRegistry.call(abi.encodeWithSignature("setDelegationForSelf(address)", _creator));
        delegationRegistry.call(abi.encodeWithSignature("disableSelfManagingDelegations()"));
        delegationRegistry.call(abi.encodeWithSignature("disableDelegationManagement()"));
    }
}