const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
    // compile solidity in code or compile them separately
    // http://127.0.0.1:7545
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:7545");

    try {
        await provider.getBlockNumber();
    } catch (error) {
        console.error("Error connecting to the provider. Make sure your local blockchain node is running.")
        process.exit(1);
    }

    const wallet = new ethers.Wallet("0x8a79b885ca79310ba787547f778371ee5ae7601cfe5356d1becb4b8c18afd3dc", provider);
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying, pls wait...");

    try {
        const contract = await contractFactory.deploy(); // STOP here! wait for contract to deploy...
        console.log("Contract deployed", contract);
    } catch (error) {
        console.log("Error deploying the contract", error)
        process.exit(1);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    });