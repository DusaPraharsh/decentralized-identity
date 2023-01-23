const { ethers } = require("ethers");
const dotenv = require("dotenv");
const { hexStripZeros } = require("ethers/lib/utils");

dotenv.config();

function hexToBytes(hex) {
  for (var bytes = [], c = 0; c < hex.length; c += 2)
    bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes;
}

const main = async () => {
  let deployerPrivate = process.env.DEPLOYER_PRIVATE; //wallet
  const ALCHAPIKEY = process.env.ALCHAPIKEY; //alchemy
  const ETHERAPIKEY = process.env.ETHERAPIKEY; //etherscan
  const INFURAAPIKEY = process.env.INFURAAPIKEY; //infura

  console.log(ALCHAPIKEY);
  const provider = await ethers.getDefaultProvider("goerli", {
    alchemy: ALCHAPIKEY,
    etherscan: ETHERAPIKEY,
    infura: INFURAAPIKEY,
  });

  console.log(deployerPrivate);
  deployerPrivate = hexToBytes(deployerPrivate);

  console.log(ethers.utils.isBytesLike(deployerPrivate));

  const Zap = new ethers.Wallet(deployerPrivate, provider);
  const ZapBalance = await Zap.getBalance();

  await console.log("Deploying contract with account: ", Zap.getAddress());
  await console.log("Account balance: ", ZapBalance.toString());

  const Token = await hre.ethers.getContractFactory("ERC721Identifier");
  const zapToken = await Token.connect(Zap);
  const portal = await zapToken.deploy(
    "Zap Digital ID Collection",
    "symbol things",
    "https://identifier-database.getsandbox.com/identifiers/"
  );
  await portal.deployed();

  console.log("Contract Address: ", portal.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
