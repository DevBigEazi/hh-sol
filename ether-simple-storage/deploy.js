const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
    // compile solidity in code or compile them separately
    // http//172.18.64.1:7545

    const provider = new ethers.JsonRpcProvider("http://172.18.64.1:7545");
    const wallet = new ethers.Wallet("0x016b7a9f0ef7293991bf0c1b5a03e40107a0909f2757546b200b755bfd2db6b7", provider);
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying, pls wait...");

    const contract = await contractFactory.deploy(); // STOP here! wait for contract to deploy...
    console.log("Contract deployed", contract);
    const transactionReceipt = await contract.deploymentTransaction().wait(1);
    console.log("Here is the transaction deployed:");
    console.log(contract.deploymentTransaction())
    console.log("Here is the transaction receipt:");
    console.log(transactionReceipt);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    });