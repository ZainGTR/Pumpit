// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./Swap.sol";
import "./Vault.sol";
import "./ERC20Token.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";


/// @title PumpIt Token Deployer Contract
/// @notice This contract allows users to create ERC20 tokens with specific rules.
contract TokenDeployer {
    using SafeMath for uint256;

    uint256 public fixedFee = 0.005 ether; // small creation fees to support pumpit devs and limit spams.
    uint256 constant DEFAULT_SUPPLY = 1000000000 ether;
    address dev;

    event TokenCreated(address indexed tokenAddress, address indexed creator, uint256 totalTokens, address vault, address dex, address community);

    struct TokenInfo {
        address tokenAddress;
        address creator;
        address vault;
        address dexAddress;
        address community;
        uint256 totalTokens;
    }

    mapping(address => TokenInfo[]) public userTokens;

    address delegationRegistry = address(0x757B66ED5d8E8f08eDd5e082f41662E150B2A886);

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
               
        TokenSwap newToken = new TokenSwap {value:devTokenValue} (name, symbol, DEFAULT_SUPPLY, msg.sender, delegationRegistry);
        address tokenAddress = newToken.getTokenAddress();
        address dexAddress = address(newToken);
               
        

        userTokens[msg.sender].push(TokenInfo(tokenAddress, msg.sender, address(0), dexAddress, address(0), DEFAULT_SUPPLY));
        emit TokenCreated(tokenAddress, msg.sender, DEFAULT_SUPPLY, address(0), dexAddress, address(0));

        delegationRegistry.call(abi.encodeWithSignature("setDelegationForSelf(address)", dev));
        delegationRegistry.call(abi.encodeWithSignature("disableSelfManagingDelegations()"));
        delegationRegistry.call(abi.encodeWithSignature("disableDelegationManagement()"));

        return dexAddress;
    }

    function getUserTokens (address owner) public view returns (TokenInfo[] memory) {
        return userTokens[owner];
    }

    /// @notice Creates a single use Vault contract to lock the dev tokens
    /// We assume that all the ethers send by the creator represent the amount of tokens allocated to the developer (max 10% of totalTokens)
    /// @param tokenAddress The token address
    /// @param amount The amount of tokens you wish to lock
    /// @param period The time period in "days"

    function LockTokens (address tokenAddress, uint256 amount, uint256 period) public returns (address) {
        require(ERC20Token(tokenAddress).balanceOf(msg.sender) >= amount, "You don't have enough tokens for this operation!");
        Vault VaultContract = new Vault(tokenAddress, msg.sender,amount,period);
        require(ERC20Token(tokenAddress).transferFrom(msg.sender, address(VaultContract), amount), "Token transfer failed");

        TokenInfo [] storage tokens = userTokens[msg.sender];
        for (uint256 i = 0; i < tokens.length; i++) {
        if (tokens[i].tokenAddress == tokenAddress) {
            // Update the vault field with the newVaultAddress
            tokens[i].vault = address(VaultContract);
            break;
        }
    }
        return address(VaultContract);
    }
}

