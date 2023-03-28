const CONTRACT_ADDRESS = "0x920690ccfe4443b29F689e2447b5ccF0BEB0cbE9";
const META_DATA_URL = "ipfs://bafyreiezby4doblwa2lmhzkezdfpit2iewvdhu4pqk3r6yth57fitthihm/metadata.json";

// Function to mint NFT
async function mintNFT(contractAddress, metaDataURL) {
  const ExampleNFT = await ethers.getContractFactory("ExampleNFT");
  const [owner] = await ethers.getSigners();
  await ExampleNFT.attach(contractAddress).mintNFT(owner.address, metaDataURL);
  console.log("NFT minted to: ", owner.address);
 }

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
