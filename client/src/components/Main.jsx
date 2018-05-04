import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ContractContainer from './ContractContainer.jsx';
import Assembly from './Assembly.jsx';

const Main = () => (

  <Switch>
    <div className="main">
      <Route exact path="/" component={ContractContainer}/>
      <Route exact path="/assembly" component={Assembly}/>
    </div>
  </Switch>
)

export default Main;