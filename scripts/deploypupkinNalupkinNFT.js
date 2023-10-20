// /* eslint-disable no-undef */
// const hre = require("hardhat");

// async function main() {
//   const currentTimestampInSeconds = Math.round(Date.now() / 1000);
//   const unlockTime = currentTimestampInSeconds + 60;
//   const pupkinNalupkinNFT = await hre.ethers.getContractFactory("pupkinNalupkinNFT");
//   const pupkinnalupkinnft = await pupkinNalupkinNFT.deploy();
//   await pupkinnalupkinnft.deployed();

//   console.log("pupkinNalupkinNFT deployed to :", pupkinnalupkinnft.address);

//   const lockedAmount = hre.ethers.parseEther("0.001");

//   const lock = await hre.ethers.deployContract("Lock", [unlockTime], {
//     value: lockedAmount,
//   });

//   await lock.waitForDeployment();
  

//   console.log(
//     `Lock with ${ethers.formatEther(
//       lockedAmount
//     )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
//   );
// }

// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });

const hre = require("hardhat");

async function main() {
  const pupkinNalupkinNFT = await hre.ethers.getContractFactory("pupkinNalupkinNFT");
  const pupkinnalupkinnft = await pupkinNalupkinNFT.deploy();

  await pupkinnalupkinnft.deployed();

  console.log("pupkinNalupkinNFT deployed to :", pupkinnalupkinnft.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exist(1);
  });
