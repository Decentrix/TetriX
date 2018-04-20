import Web3 from 'web3';

// window.web3 is the copy of the web3 that is coming from the
// metamask library
// this provider has been preconfigured to connect to the Rinkeby 
// test network

const web3 = new Web3(window.web3.currentProvider);

export default web3; // now we can import web3 in all the files