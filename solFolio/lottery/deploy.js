const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const RB_NETWORK = 'https://rinkeby.infura.io/3Af3Zx0VkmsLuKYs4bMV';
// HDWalletProvider specifies which account we want to unlock
// and use as a source of ether for deploying our contract
// and specifies which API or outside node we want to connect to

const provider = new HDWalletProvider(
  'off donor push text stone fatal about mix effort speed hamster avoid',
  RB_NETWORK
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('Attempting to deploy from account', accounts[0]);

  // result will be an instance of our contract
  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log(interface);
  console.log('Contract deployed to', result.options.address);
};
deploy();
