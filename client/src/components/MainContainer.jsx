import React, { Component } from 'react';
import Navigation from './Navigation.jsx';
import Main from './Main.jsx';
import ContractContainer from './ContractContainer.jsx';
import Assembly from './Assembly.jsx';


class MainContainer extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Navigation />
        <Main />
      </div>
    )
  }
}


export default MainContainer;