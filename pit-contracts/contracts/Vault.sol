// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

/// @title Vault Contract
/// @notice This contract locks ERC20 tokens for a period of time and allows the owner to withdraw after the lock period
contract Vault {
    using SafeMath for uint256;

    IERC20 public token;
    address public owner;
    uint256 public lockPeriod;
    uint256 public lockEndTime;
    uint256 public lockedAmount;

    event TokensLocked(address indexed token, address indexed owner, uint256 amount, uint256 lockPeriod);
    event TokensWithdrawn(address indexed token, address indexed owner, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can perform this action");
        _;
    }

    modifier lockPeriodEnded() {
        require(block.timestamp >= lockEndTime, "Lock period has not ended yet");
        _;
    }

    constructor(address tokenAddress, uint256 amount, uint256 period) {
        token = IERC20(tokenAddress);
        owner = msg.sender;
        lockPeriod = period;
        lockEndTime = block.timestamp.add(lockPeriod);
        lockedAmount = amount;

        require(token.transferFrom(msg.sender, address(this), amount), "Token transfer failed");

        emit TokensLocked(tokenAddress, msg.sender, amount, lockPeriod);
    }

    /// @notice Withdraws the locked tokens after the lock period has ended
    function withdraw() external onlyOwner lockPeriodEnded {
        uint256 amount = lockedAmount;
        lockedAmount = 0;
        require(token.transfer(owner, amount), "Token transfer failed");
        emit TokensWithdrawn(address(token), owner, amount);
    }
}
