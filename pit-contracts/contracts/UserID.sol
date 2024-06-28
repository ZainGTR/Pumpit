// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/// @title Pump It Account Contract
/// @notice This contract manages user accounts, reputation points, followers, and public posts.
contract UserID {
    struct User {
        address userAddress;
        string username;
        uint256 nftId;
        uint256 reputationPoints;
        address[] createdTokens;
        address[] followers;
        string[] publicPosts;
    }

    mapping(address => User) public users;
    mapping(string => bool) public names;

    // Modifiers
    modifier onlyUser() {
        require(users[msg.sender].userAddress == msg.sender, "Not a registered user");
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

    /// @notice Register a new user
    /// @param _username The username for the new user
    /// @param _nftId The nft image the new user want to use as profile picture.
    function registerUser(string memory _username, uint256 _nftId) external onlyValidAddress(msg.sender) {
        require(users[msg.sender].userAddress == address(0), "User already registered");
        require(checkUsernameUniqueness(_username), "Username already taken");
        users[msg.sender].userAddress = msg.sender;
        users[msg.sender].reputationPoints = 0;
        users[msg.sender].username = _username; 
        users[msg.sender].nftId = _nftId;
        names[_username] = true;
    }

    /// @notice Update a new user
    function updateUser(uint256 _nftId) external onlyValidAddress(msg.sender) {
        require(users[msg.sender].userAddress == msg.sender, "User is not registered");
        users[msg.sender].nftId = _nftId;
    }

    /// @notice Add a new token created by the user
    /// @param _tokenAddress The address of the created token
    function addCreatedToken(address _tokenAddress) external onlyUser onlyValidAddress(_tokenAddress) {
        // todo check if the user address is the same as the token dev
        users[msg.sender].createdTokens.push(_tokenAddress);
    }

    /// @notice Add a follower to the user
    /// @param _followerAddress The address of the follower
    function addFollower(address _followerAddress) external onlyUser onlyValidAddress(_followerAddress) {
        users[msg.sender].followers.push(_followerAddress);
    }

    /// @notice Add a public post by the user
    /// @param _post The content of the public post
    function addPublicPost(string calldata _post) external onlyUser {
        users[msg.sender].publicPosts.push(_post);
    }

    /// @notice Get user details
    /// @param _userAddress The address of the user
    /// @return User details
    function getUser(address _userAddress) external view onlyValidAddress(_userAddress) returns (User memory) {
        return users[_userAddress];
    }

    /// @notice Get all created tokens of a user
    /// @param _userAddress The address of the user
    /// @return List of created token addresses
    function getCreatedTokens(address _userAddress) external view onlyValidAddress(_userAddress) returns (address[] memory) {
        return users[_userAddress].createdTokens;
    }

    /// @notice Get all followers of a user
    /// @param _userAddress The address of the user
    /// @return List of follower addresses
    function getFollowers(address _userAddress) external view onlyValidAddress(_userAddress) returns (address[] memory) {
        return users[_userAddress].followers;
    }

    /// @notice Get all public posts of a user
    /// @param _userAddress The address of the user
    /// @return List of public posts
    function getPublicPosts(address _userAddress) external view onlyValidAddress(_userAddress) returns (string[] memory) {
        return users[_userAddress].publicPosts;
    }
}