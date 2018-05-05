import React, { Component } from 'react';
import Header from './Header.jsx';
import Navigation from './Navigation.jsx';
import MainContainer from './MainContainer.jsx';
import source from './../../assets/sourceObject';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldCode: source.oldContract,
      newCode: source.newContract,
      difference: source.difference
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <Header contractName={this.state.oldCode} />
          <MainContainer oldCode={this.state.oldCode} newCode={this.state.newCode} difference={this.state.difference} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;