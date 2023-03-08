const CONTRACT_ADDRESS = "PASTE_CONTRACT_ADDRESS";
const META_DATA_URL = "PASTE_URL_HERE";

// paste function here

mintNFT(CONTRACT_ADDRESS, META_DATA_URL)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
