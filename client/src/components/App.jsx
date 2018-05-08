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
      contractName: source.name,
      source: source
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="app">
          <Header contractName={this.state.contractName} />
          <MainContainer source={this.state.source} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;