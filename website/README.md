# Application Website

## Functionality

The application website is a simple React App to simulate a customer applying for creating an account of some sort. This is where the NFTs or “Zap Digital Identifiers” are minted to the customer’s wallet.

## Folder Breakdown

**create your own .env file**.

```jsx
REACT_APP_DEPLOYER_PRIVATE=
```

You should place the **private key of the wallet you used to deploy your smart contract** here.

## Instructions

1. npm i to install dependencies
2. Make sure you have already deployed your smart contract
3. Change the contractAddress to the address of the contract you have deployed
4. Create an alchemy account and place replace my api key for the provider variable
5. Create the .env folder as desribed above. Make sure that the wallet has Goerli testnet eth.
6. npm start to start a testing locally
