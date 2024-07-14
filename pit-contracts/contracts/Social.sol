// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

/// @title Pump It Account Contract
/// @notice This contract manages user accounts, reputation points, and links to off-chain data.
contract Social {
    struct User {
        string username;
        uint256 nftId;
        uint256 reputationPoints;
        string externalDataHash; // Hash or URL pointing to the off-chain data
    }

    struct Page {
        string ticker;
        string tokenName;
        uint256 nftId;
        uint256 reputationPoints;
        string externalDataHash; // Hash or URL pointing to the off-chain data
    }

    mapping(address => User) public users;
    mapping(address => Page) public pages;
    mapping(string => bool) public names;
    mapping(string => bool) public tickers;

    // Modifiers
    modifier onlyUser() {
        require(bytes(users[msg.sender].username).length != 0, "Not a registered user");
        _;
    }

    modifier onlyValidAddress(address _addr) {
        require(_addr != address(0), "Invalid address");
        _;
    }

    /// @notice Check if the username is unique
    /// @param _username The username to check
    /// @return bool indicating whether the username is unique
    function checkUsernameUniqueness(string memory _username) public view returns (bool) {
        return !names[_username];
    }

    /// @notice Check if the ticker is unique
    /// @param _ticker The ticker to check
    /// @return bool indicating whether the ticker is unique
    function checkTickerUniqueness(string memory _ticker) public view returns (bool) {
        return !tickers[_ticker];
    }

    /// @notice Register a new user
    /// @param _username The username for the new user
    /// @param _nftId The nft image the new user want to use as profile picture.
    function registerUser(string memory _username, uint256 _nftId, string memory _externalDataHash) external onlyValidAddress(msg.sender) {
        require(bytes(users[msg.sender].username).length == 0, "User already registered");
        require(checkUsernameUniqueness(_username), "Username already taken");

        users[msg.sender] = User({
            username: _username,
            nftId: _nftId,
            reputationPoints: 0,
            externalDataHash: _externalDataHash
        });

        names[_username] = true;
    }

    /// @notice Update a user nftId
    /// @param _nftId the nft_id the user want to use as profile picture.
    function updateUser(uint256 _nftId, string memory _externalDataHash) external onlyValidAddress(msg.sender) onlyUser {
        users[msg.sender].nftId = _nftId;
        users[msg.sender].externalDataHash = _externalDataHash;
    }

    /// @notice Get user details
    /// @param _userAddress The address of the user
    /// @return User details
    function getUser(address _userAddress) external view onlyValidAddress(_userAddress) returns (User memory) {
        return users[_userAddress];
    }

    /// @notice Register a new page
    /// @param _ticker The ticker for the new page
    /// @param _tokenName The token name for the new page
    /// @param _nftId The nft image the new page wants to use as a profile picture
    function registerPage(string memory _ticker, string memory _tokenName, uint256 _nftId, string memory _externalDataHash) external onlyValidAddress(msg.sender) {
        require(checkTickerUniqueness(_ticker), "Ticker already taken");

        pages[msg.sender] = Page({
            ticker: _ticker,
            tokenName: _tokenName,
            nftId: _nftId,
            reputationPoints: 0,
            externalDataHash: _externalDataHash
        });

        tickers[_ticker] = true;
    }

    /// @notice Update a page's nftId
    /// @param _nftId the nft_id the page wants to use as a profile picture
    function updatePage(uint256 _nftId, string memory _externalDataHash) external onlyValidAddress(msg.sender) {
        pages[msg.sender].nftId = _nftId;
        pages[msg.sender].externalDataHash = _externalDataHash;
    }

    /// @notice Get page details
    /// @param _pageAddress The address of the page
    /// @return Page details
    function getPage(address _pageAddress) external view onlyValidAddress(_pageAddress) returns (Page memory) {
        return pages[_pageAddress];
    }
}
