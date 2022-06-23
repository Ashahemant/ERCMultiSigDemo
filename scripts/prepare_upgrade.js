// scripts/prepare_upgrade.js
async function main() {
   // const proxyAddress = '0xFf1253aE363ee0046f17457DB7A51470c9258529';
   
    const BoxV2 = await ethers.getContractFactory("ERCToken2");
    console.log("Preparing upgrade...");
    const boxV2Address = await  BoxV2.deploy();
   // const boxV2Address = await upgrades.prepareUpgrade(proxyAddress, BoxV2);
    console.log("BoxV2 at:", boxV2Address.address);

  }
   
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });