const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); // constructor

// each instance connects to a diff eth network

// web3 is our portal into the Eth world
// v0.21.x --> "primitive" interface - only callbacks for async code
// v1.x.x --> support for promises + async / await

// we need to create a Provider - a communication layer
// telephone between Ganache and web3

// creates an instance that will connect to our local
// machine solely for the purpose of running these tests
// "ganache.provder()" would change if we connected to the Rinkbe network for ex
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile');

/**
 * Mocha Functions
 * it - runs a test and makes an assertion
 * describe - groups together 'it' funcs
 * beforeEach - execute some general setup code
 */

/**
 * 1. Mocha starts
 * 2. beforeEach - Deploy a new contract
 * 3. it - Manipulate the contract
 * 4. it - Make an assertion about the contract
 * 5. Go to 2.
 */

// beforeEach(() => {
//   // get a list of all accounts
//   web3.eth.getAccounts()
//     .then(fetchedAccounts => {
//       console.log(fetchedAccounts);
//     });

//   // Use one of those accounts to deploy the contract

// });
let accounts;
let inbox;
const INITIAL_STRING = 'Hi there!';

/**
 * Tests to create:
 * that the intialMessage and newMesssage gets set properly
 * that the beforeEach works --> by making sure that the inbox has an address 
 * presence of an addres means that this contract has likely been successfully
 * deployed to the local ganache test network
 */

beforeEach(async () => {
  // get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // Use one of those accounts to deploy the contract
  // our ABI (solidity <-> js)- teaches web3 about what methods
  // an Inbox contract has
  // The value we get from is the direct reference to the inbox
  // javascript representation of the contract, represents what exists on the block chain
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    // tells web3 that we want to deploy a new copy of this contract
    .deploy({
      data: bytecode,
      arguments: [INITIAL_STRING]
    })
    // instructs web3 to send out a transaction that creates this contract
    // accounts[0] the account being used
    .send({
      from: accounts[0],
      gas: '1000000'
    });
  inbox.setProvider(provider);

});

// what web3 needs with contracts
// interact with deployed contract: ABI, address of deployed contract
// create a contract: ABI, bytecode
describe('Inbox', () => {
  it('deploys a contract', () => {
    // Object of type Contract (which was constructed by the web3 library)

    // Provider is the communciation layer with the actual block chain
    // Request Provider helps facilitate communication w the block chain
    // List of providers: Websocket Provider, HttpProvider, IpcProvider
    // IpcProvider is used when you run a network on the same machine as your 
    // test setup as well

    // options.address = address that the contract now exists yet

    // methods object - actual functions that we can interact with that are
    // tied to our contract
    // setMessage(string) and message();
    // console.log('he');
    // console.log(inbox); 

    // fails if it's a null or undefined
    assert.ok(inbox.options.address); // inbox.options.address is a defined val?
  });

  it('has a default message', async () => {
    // we're going to call a method on our inbox object
    // we reference the contract (inbox) that exists ont he block chain
    // our contract has a property called methods
    // .message().call(); 
    // --> .message() customizes our parameters
    // --> .call() customizes how that func gets call
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_STRING);
  });

  it('can change the message', async () => {
    // send transaction with an object argument that specifies who is paying
    // for this transaction / change into this network
    // remember that when you send a transaction to a function, you get
    // a transaction hash (not a message) 
    // that's why we don't save like we did in the above
    // error is thrown automatically if it fails
    await inbox.methods.setMessage('bye').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'bye');
  });
});
