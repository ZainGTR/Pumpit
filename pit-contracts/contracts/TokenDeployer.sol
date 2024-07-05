// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./Swap.sol";
import "./Vault.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


/// @title PumpIt Token Deployer Contract
/// @notice This contract allows users to create ERC20 tokens with specific rules.
contract TokenDeployer {
    using SafeMath for uint256;

    uint256 public fixedFee = 0.025 ether; // small creation fees to support pumpit devs and limit spams.
    uint256 devRate = 33333333;
    uint256 constant DEFAULT_SUPPLY = 1000000000 ether;
    address dev;

    event TokenCreated(address indexed tokenAddress, address indexed creator, uint256 devTokens, uint256 totalTokens, address vault, address dex, address community);

    struct TokenInfo {
        address tokenAddress;
        address creator;
        address vault;
        address dexAddress;
        address community;
        uint256 totalTokens;
        uint256 devTokens;
    }

    mapping(address => TokenInfo[]) public userTokens;

    constructor() {
        dev = msg.sender;
    }

    /// @notice Creates a new ERC20 token
    /// We assume that all the ethers send by the creator represent the amount of tokens allocated to the developer (max 10% of totalTokens)
    /// @param name The name of the token
    /// @param symbol The symbol of the token
    function createToken(
        string memory name,
        string memory symbol
    ) external payable returns (address){
        require(msg.value >= fixedFee, "Insufficient fee");
        uint256 devTokenValue = msg.value - fixedFee; // We send the rest to the dex contract
        payable(dev).transfer(fixedFee);
               
        TokenSwap newToken = new TokenSwap {value:devTokenValue} (name, symbol, DEFAULT_SUPPLY, msg.sender);
        address tokenAddress = newToken.getTokenAddress();
        address dexAddress = address(newToken);
        uint256 devTokens = devTokenValue.mul(devRate);
               
        

        userTokens[msg.sender].push(TokenInfo(tokenAddress, msg.sender, address(0), dexAddress, address(0), DEFAULT_SUPPLY, devTokens));
        emit TokenCreated(tokenAddress, msg.sender, devTokens, DEFAULT_SUPPLY, address(0), dexAddress, address(0));

        return dexAddress;
    }

    function getUserTokens (address owner) public view returns (TokenInfo[] memory) {
        return userTokens[owner];
    }
}

