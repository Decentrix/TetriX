const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
// provider is what allows us to connect to any given network
const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require('../compile');

let lottery;
let accounts;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  lottery = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({
      from: accounts[0],
      gas: '1000000',
    });
});

describe('Lottery Contract', () => {
  it('deploys a contract', () => {
    assert.ok(lottery.options.address); // checking that the lottery has an address
  });
  it('allows one account to enter', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: /* amount in wei */ web3.utils.toWei('.02', 'ether'),
    });

    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    });
    // value that it should be, value that it is
    assert.equal(accounts[0], players[0]);
    assert.equal(1, players.length);
  });
  it('allows multiple accounts to enter', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: /* amount in wei */ web3.utils.toWei('.02', 'ether'),
    });
    await lottery.methods.enter().send({
      from: accounts[1],
      value: /* amount in wei */ web3.utils.toWei('.02', 'ether'),
    });
    await lottery.methods.enter().send({
      from: accounts[2],
      value: /* amount in wei */ web3.utils.toWei('.02', 'ether'),
    });
    const players = await lottery.methods.getPlayers().call({
      from: accounts[0],
    });
    assert.equal(accounts[0], players[0]);
    assert.equal(accounts[1], players[1]);
    assert.equal(accounts[2], players[2]);
    assert.equal(3, players.length);
  });
  it('requires a minimum amount of ether to enter', async () => {
    try {
      await lottery.methods.enter().send({
        from: accounts[0],
        value: 0,
      });
      // assert(false) fails our code no matter what
      assert(false);
    } catch (err) {
      // assert that asomething just went wrong
      assert(err);
    }
  });
  it('only manager can call pickWinner', async () => {
    try {
      await lottery.methods.pickWinner().sed({
        from: accounts[1],
      });
      assert(false);
    } catch (err) {
      assert(err);
    }
  });
  // enter in one player so that we do not have to mess with the
  // random pickWinner
  it('sends money to the winner and resets the players array', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei('2', 'ether')
    });
    // returns the amount of ether in units of wei that a given account
    // controls
    const initialBalance = await web3.eth.getBalance(accounts[0]);
    await lottery.methods.pickWinner().send({ from: accounts[0] });
    const finalBalance = await web3.eth.getBalance(accounts[0]);
    const difference = finalBalance - initialBalance;

    // 1.8 accounts for gas cost
    assert(difference > web3.utils.toWei('1.8', 'ether'));
  });
  // Additional asserts --> players get emptied out after calling
  // pickWinner
  // check lottery has balance of zero
});
