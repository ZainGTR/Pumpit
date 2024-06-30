// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

/// @title PumpIt Token Deployer Contract
/// @notice This contract allows users to create ERC20 tokens with specific rules.
contract TokenDeployer {
    using SafeMath for uint256;

    address public dexContract;
    address public vaultContract;
    address public RewardContract;


    uint256 public fixedFee = 0.025 ether; // small creation fees to support pumpit devs and limit spams.
    uint256 constant DEFAULT_SUPPLY = 1000000000 ether;
    uint256 constant MAX_DEV_SUPPLY = 100000000 ether;

    event TokenCreated(address indexed tokenAddress, address indexed creator, uint256 devTokens, uint256 totalTokens, bool locked);

    struct TokenInfo {
        address tokenAddress;
        address creator;
        uint256 totalTokens;
        uint256 devTokens;
        bool locked;
    }

    mapping(address => TokenInfo[]) public userTokens;

    constructor(address _dexContract) {
        dexContract = _dexContract;
    }

    /// @notice Creates a new ERC20 token
    /// We assume that all the ethers send by the creator represent the amount of tokens allocated to the developer (max 10% of totalTokens)
    /// @param name The name of the token
    /// @param symbol The symbol of the token
    /// @param lockTokens If true, tokens will be locked
    function createToken(
        string memory name,
        string memory symbol,
        uint256 devTokens,
        bool lockTokens,
        uint256 lockParams
    ) external payable {
        require(devTokens <= MAX_DEV_SUPPLY, "Dev tokens cannot exceed 10% of total supply");
        require(msg.value >= fixedFee, "Insufficient fee");
        uint256 devTokenValue = msg.value - fixedFee; // We send the rest to the dex contract
        
        uint256 availableTokens = DEFAULT_SUPPLY - devTokens;
        

        ERC20Token newToken = new ERC20Token(name, symbol, DEFAULT_SUPPLY, msg.sender);
        address tokenAddress = address(newToken);

        if (lockTokens) {
            // Mint tokens to a lock contract
            newToken.mint(dexContract, devTokens);
        } 
        // Mint tokens to the DEX contract
        newToken.mint(dexContract, availableTokens);
        newToken.mint(msg.sender, userTokensAmount);
        

        userTokens[msg.sender].push(TokenInfo(tokenAddress, msg.sender, totalTokens, lockTokens));
        emit TokenCreated(tokenAddress, msg.sender, totalTokens, lockTokens);
    }
}

/// @title ERC20 Token with custom rules
contract ERC20Token is ERC20 {
    address public dev;
    uint256 public immutable totalTokens;

    constructor(
        string memory name,
        string memory symbol,
        uint256 _totalTokens,
        address _dev
    ) ERC20(name, symbol) {
        dev = _dev;
        totalTokens = _totalTokens;
        _mint(dev, _totalTokens / 10); // Mint dev tokens
    }

    /// @notice Mint tokens to a specified address
    /// @param to The address to mint tokens to
    /// @param amount The amount of tokens to mint
    function mint(address to, uint256 amount) external {
        require(msg.sender == dev, "Only dev can mint");
        _mint(to, amount);
    }

    /// @notice Mint tokens to a lock contract
    /// @param lockContract The address of the lock contract
    /// @param amount The amount of tokens to mint
    function mintToLockContract(address lockContract, uint256 amount) external {
        require(msg.sender == dev, "Only dev can mint to lock contract");
        _mint(lockContract, amount);
    }
}
