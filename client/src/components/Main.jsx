import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ContractContainer from './ContractContainer.jsx';
import Assembly from './Assembly.jsx';
import BytecodeOpcode from './BytecodeOpcode.jsx';
import Interface from './Interface.jsx';

const Main = (props) => (
  <div className="main" >
    <Switch>
        <Route exact path="/" exact component={ContractContainer}/>
        <Route path="/assembly" exact component={Assembly}/>
        <Route path="/bytecodeOpcode" exact component={BytecodeOpcode}/>
        <Route path="/interface" exact component={Interface}/>
    </Switch>
  </div>
)

export default Main;