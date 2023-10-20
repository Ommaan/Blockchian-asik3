//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.15;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';



contract pupkinNalupkinNFT is ERC721, Ownable{
    uint256 public mintPrice;
    uint256 public totaSupply;
    uint256 public maxSupply;
    uint256 public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint256) public walletMints;

    constructor() payable ERC721('pupkinNalupkin', 'RP'){
        mintPrice = 0.015 ether;
        totaSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;
        //set withdraw  wallet address
    }

    function setIsPublicMintEnabled(bool isPublicMintEnabled_arg) external onlyOwner {
        isPublicMintEnabled = isPublicMintEnabled_arg;
    }

    function setBaseTokenUri(string calldata baseTokenUri_arg) external onlyOwner {
        baseTokenUri = baseTokenUri_arg;
    }

    function tokenURI(uint256 tokenId_arg) public view override returns (string memory){
        require (_exists(tokenId_arg), 'This token doesnot exist');
        return string(abi.encodePacked(baseTokenUri, String.toString(tokenId_arg),".json"));
    }

    function withdraw() external onlyOwner {
        (bool success, ) = withdrawWallet.call{ value: address(this).balance}('');
        require(success, 'withdraw was failed, try again');
    }

    function mint(uint256 quantity_arg) public payable {
        require(isPublicMintEnabled, 'Minting is enble try again');
        require(msg.value == quantity_arg * mintPrice, 'wrong mint value');
        require(totaSupply + quantity_arg <= maxSupply, 'Soldout, wait until next time, all information will be in our X accaout @Nlupkinpupkin');
        require(walletMints[msg.sender] + quantity_arg <= maxPerWallet, 'exceed max wallet, dont be too greedy');

        for(uint256 i = 0; i < quantity_arg; i++){
            uint256 newTokenId = totaSupply + 1;
            totaSupply++;
            _safeMint(msg.sender, newtokenId);
        }
    }
}



