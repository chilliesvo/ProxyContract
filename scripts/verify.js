const hre = require("hardhat");
const contracts = require("../contracts.json");

async function main() {
  try {
    await hre.run("verify:verify", {
      address: contracts.test,
    });
  } catch (err) {
    console.log("err :>> ", err);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
