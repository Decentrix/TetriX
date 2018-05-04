import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  // automatically takes places in the constructor
  state = {
    manager: '',
    players: [],
    balance: '',
  };

  async componentDidMount() {
    // note that we don't have to include { from: accounts[0] } inside call
    // because for meta mask it defaults to the account that we are first signed
    // into
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address);
    console.log('manager', manager);
    this.setState({ manager });
  }
  render() {
    // Normally we would use async await syntax
    // but we can't with the render method of react... so
    // web3.eth.getAccounts()
    //   .then(console.log);
    // console.log(web3.version);
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by {this.state.manager}
          There are currently {this.state.players.length} people entered
          competing to win {web3.utils.fromWei(this.state.balance, 'ether')} ether!
          </p>
      </div>
    );
  }
}

export default App;
