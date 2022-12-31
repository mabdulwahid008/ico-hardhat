
const { ethers } = require("hardhat");
require('dotenv').config()
const { CRYPTO_DEVS_NFT_CONTRACT_ADDRESS } = require('../constants/index.js')

async function main() {

  const cryptoDevTokenContract = await ethers.getContractFactory("CryptoDevToken")
  
  const deployedCryptoDevTokenContract = await cryptoDevTokenContract.deploy( CRYPTO_DEVS_NFT_CONTRACT_ADDRESS );

  await deployedCryptoDevTokenContract.deployed()

  console.log( "Crypto Devs Token Contract Address:" +  deployedCryptoDevTokenContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
