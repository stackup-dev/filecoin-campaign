const { ethers } = require("hardhat");

async function main() {
    const coinFile = await ethers.getContractFactory("CoinFile");
    const contract = await coinFile.attach("YOUR_CONTRACT_ADDRESS");
    const owner = await contract.owner();
    let balance = await contract.balanceOf(owner);
    // Now you can call functions of the contract
    console.log(`The token balance is: ${ethers.utils.formatUnits(balance, 18)}`);

}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
