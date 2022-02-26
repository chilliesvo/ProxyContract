const hre = require("hardhat");
const fs = require("fs");
const ethers = hre.ethers;

async function main() {
  //Loading accounts
  const accounts = await ethers.getSigners();
  const addresses = accounts.map(item => item.address);
  const admin = addresses[0];

  // Loading contract factory.
  const Test = await ethers.getContractFactory("test");

  // Deploy contracts
  console.log("=======================================================");
  console.log("DEPLOY CONTRACTS");
  console.log("=======================================================");

  const test = await Test.deploy();
  await test.deployed();
  console.log("Test deployed to:", test.address);

  const contractAddresses = {
    admin: admin,
    test: test.address
  };

  await fs.writeFileSync("contracts.json", JSON.stringify(contractAddresses));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
