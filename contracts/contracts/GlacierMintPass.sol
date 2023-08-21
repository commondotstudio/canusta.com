// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Royalty.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract GlacierMintPass is AccessControl, ERC721, ERC721Royalty, ERC721Burnable {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    Counters.Counter private whitelistSize;

    mapping(address => bool) public hasMinted;
    mapping(address => bool) public isWhitelisted;
    
    // `TOKEN_PRICE` is defined in wei (ether / 1e18)
    uint256 public constant TOKEN_PRICE = 1e18;
    uint32 public constant TOKEN_AMOUNT = 273;
    uint256 public whitelistMintStart;
    uint256 public openMintStart;
    uint32 private maxWhitelisted;


    /**
    * Grants `msg.sender` `DEFAULT_ADMIN_ROLE`, sets token price, whitelist mint start timestamp, open mint start timestamp and royalties.
    * @param whitelistMintStart_ UNIX timestamp that determines when whitelisted addresses are allowed to start minting.
    * @param openMintStart_ UNIX timestamp that determines when all addresses are allowed to start minting.
    * @param feeNumerator Amount of basis points of the selling price owed as royalty.
    * @param maxWhitelisted_ Amount addresses that can be maximallz whitelisted.
    */
    constructor(uint256 whitelistMintStart_, uint256 openMintStart_, uint96 feeNumerator, uint32 maxWhitelisted_) ERC721("GlacierMintPass", "273KPASS") {

        require(whitelistMintStart_ <= openMintStart_, "Whitelist mint start date cannot be set after open mint start date.");
        require(whitelistMintStart_ >= block.timestamp, "Whitelist mint start date cannot be in the past.");
        require(openMintStart_ >= block.timestamp, "Open mint start date cannot be in the past.");
        require(TOKEN_AMOUNT >= maxWhitelisted_, "Max. whitelisted addresses cannot be more than token amount.");

        whitelistMintStart = whitelistMintStart_;
        openMintStart = openMintStart_;
        maxWhitelisted = maxWhitelisted_;

        _setupRole(DEFAULT_ADMIN_ROLE, msg.sender);

        _setDefaultRoyalty(address(this), feeNumerator);
    }

    /**
    * Mints a token when one of the follwoing conditions is met.
    * a) msg.value >= 1ETH and msg.sender is part of the whitelist and whitelist sale started and msg.sender did not mint a token before
    * b) msg.value >= 1ETH and open sale has started and msg.sender did not mint a token before
    */
    function mint() external payable {
        require(msg.value >= TOKEN_PRICE, "Insufficient payment.");
        require(whitelistMintStart < block.timestamp, "Token sale has not started yet.");
        // The requirement for being whitelisted shall is only required as long as we are in the whitelist minting phase.
        require(isWhitelisted[msg.sender] || openMintStart <= block.timestamp, "Wallet not whitelisted. Wait for open mint sale.");
        require(!hasMinted[msg.sender], "Wallet has already minted. Only one mint per wallet allowed.");

        uint256 newItemId = _tokenIds.current();
        require(newItemId < TOKEN_AMOUNT, "No more tokens mintable.");

        _safeMint(msg.sender, newItemId);
        setTokenURI(newItemId);
        _tokenIds.increment();
        hasMinted[msg.sender] = true;
    }

    /**
    * Sets the token URI of a token according to the URI pattern defined with external stakeholders.
    * @param tokenId Token ID of an existing token.
    */
    function setTokenURI(uint256 tokenId) internal {

    }

    /**
    * Return the base URI. 
    * @return string Base URI
    */
    function _baseURI() internal view override(ERC721) returns (string memory) {

    }

    /**
    * Adds account to the whitelist. Can only be called with `DEFAULT_ADMIN_ROLE`.
    * @param account Address of the account added to the whitelist.
    */
    function grantWhitelist(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(whitelistSize.current() < maxWhitelisted, "The maximum number of whitelisted accounts has been reached.");
        require(!isWhitelisted[account], "Account already whitelisted.");
        isWhitelisted[account] = true;
        whitelistSize.increment();
    }

    /**
    * Removes account to the whitelist. Can only be executed with `DEFAULT_ADMIN_ROLE`.
    * @param account Address of the account removed from the whitelist.
    */
    function revokeWhitelist(address account) external onlyRole(DEFAULT_ADMIN_ROLE) {
        require(isWhitelisted[account], "Account is not whitelisted.");
        isWhitelisted[account] = false;
        whitelistSize.decrement();
    }

    /**
    * Admin mint function that allows for arbitrary minting within the available amounts of tokens.
    * @param to Address of the account receiving the minted tokens.
    * @param amount Amount of minted tokens.
    */
    function mintAdmin(address to, uint256 amount) external onlyRole(DEFAULT_ADMIN_ROLE) {
        uint256 newItemId = _tokenIds.current();
        require((newItemId + amount) <= TOKEN_AMOUNT, "Exceeds max. mintable token limit.");
        
        for(uint256 i = 0; i < amount; i++) {
            _safeMint(to, newItemId);
            setTokenURI(newItemId);
            _tokenIds.increment();
            newItemId = _tokenIds.current();
        }
    }

    /**
    * Withdraw funds from the contract to given address. Can only be called with `DEFAULT_ADMIN_ROLE`.
    * @param to Address receiving the withdrawn funds of the contract.
    */
    function withdrawFunds(address to) external onlyRole(DEFAULT_ADMIN_ROLE) {
        payable(to).transfer(address(this).balance);
    }

    /**
    * Returns whether a certain IERC interface is supported.
    * @param interfaceId: IERC Interface ID.
    * @return bool Returns `true` if given IERC interface is supported.
    */
    function supportsInterface(bytes4 interfaceId) public view override(ERC721, AccessControl, ERC721Royalty) returns (bool) {
        return
            ERC721.supportsInterface(interfaceId) ||
            ERC721Royalty.supportsInterface(interfaceId) ||
            AccessControl.supportsInterface(interfaceId);
    }

    /**
     * @dev See {ERC721-_burn}. This override additionally clears the royalty information for the token.
     */
    function _burn(uint256 tokenId) internal override(ERC721, ERC721Royalty) {
        ERC721._burn(tokenId);
        _resetTokenRoyalty(tokenId);
    }
}
