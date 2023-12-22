import {ethers} from "hardhat";

async function main() {
  const eggforceNFT = await ethers.deployContract("EggforceNFT", [process.env.NFT_BASE_URI], {
    gasLimit: "0x1000000"
  });

  await eggforceNFT.waitForDeployment();

  console.log(
    `Eggforce deployed to ${eggforceNFT.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
