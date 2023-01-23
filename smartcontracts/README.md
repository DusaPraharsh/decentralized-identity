# ERC721Identifier Contract

## Folder Breakdown

**create your own .env file**.

```jsx
**DEPLOYER_PRIVATE=

ALCHAPIKEY=

ETHERAPIKEY=

INFURAAPIKEY =**
```

For this script to work you will to create accounts and get API keys for each of these services as well as create an Ethereum wallet and inputs its private key.

**In order to run scripts you must use the npx hardhat run command. So for deploy.js it would be: npx hardhat run scripts/deploy.js**

## Instructions

1. npm i to install dependencies
2. Edit contract to your liking
3. Use run.js script to test contract locally. To run scripts type: npx hardhat run scripts/filename. So for run.js it would be npx hardhat run scripts/run.js.
4. Deploy to testnet using deploy.js.
5. Keep in mind that everytime you deploy a new contract, it has a new address meaning that if you are linking a front end to your contract, you will have to change it there
