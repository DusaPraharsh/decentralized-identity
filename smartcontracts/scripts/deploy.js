const { ethers } = require("ethers");
const dotenv = require("dotenv");

dotenv.config();

function hexToBytes(hex) {
  for (var bytes = [], c = 0; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}

const main = async () => {
  // get private key from .env
  let deployerprivate = process.env.DEPLOYER_PRIVATE;
  const ALCHAPIKEY = process.env.ALCHAPIKEY;
  const ETHERAPIKEY = process.env.ETHERAPIKEY;
  const INFURAAPIKEY = process.env.INFURAAPIKEY;

  console.log(ALCHAPIKEY);
  // get a web3 provider
  const provider = await ethers.getDefaultProvider("goerli", {
    alchemy: ALCHAPIKEY,
    etherscan: ETHERAPIKEY,
    infura: INFURAAPIKEY,
  });

  // Turning string into datahexstring
  console.log(deployerprivate);
  deployerprivate = hexToBytes(deployerprivate);

  // Making sure that this is private key is a datahexstring
  console.log(ethers.utils.isBytesLike(deployerprivate));

  // Creating wallet instance
  const Zap = new ethers.Wallet(deployerprivate, provider);

  const ZapBalance = await Zap.getBalance();

  await console.log("Deploying contracts with account: ", Zap.getAddress());
  await console.log("Account balance: ", ZapBalance.toString());

  const Token = await hre.ethers.getContractFactory("ERC721Identifier");
  const zapToken = await Token.connect(Zap);
  const portal = await zapToken.deploy(
    "Zap Digital ID Collection",
    "symbol things",
    "https://identifier-database.getsandbox.com/identifiers/"
  );
  await portal.deployed();

  console.log("Contract address: ", portal.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
