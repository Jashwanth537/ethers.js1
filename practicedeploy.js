const ethers = require("ethers");

const fs = require(fs - extra);
require("dotenv").config();

async function main() {
  //connecting to the local ganache blockchain
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  //take the abi , bin for deploying the contract
  const abi = fs.readFileSync("/.SimpleStorage_sol_SimpleStorage.abi", "utf8");
  const binary = fs.readFileSync(
    "./SimpleStorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait!");
  const contract = await contractFactory.deploy();
  const deployReceipt = await conrtract.deployTransaction.wait(1);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
