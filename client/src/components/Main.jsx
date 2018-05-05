import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ContractContainer from "./ContractContainer.jsx";
import AssemblyContainer from "./AssemblyContainer.jsx";
import ByteOpContainer from './ByteOpContainer.jsx';

const Main = (props) => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" render={routeProps => (
          <div>
            <ContractContainer {...routeProps} data={props}/>
          </div>
        )} />
        <Route path="/assembly" render={routeProps => (
					<AssemblyContainer {...routeProps} oldCode={props.oldCode} newCode={props.newCode} />
				)} />
        <Route path="/bytecodeOpcode" render={routeProps => (
          <ByteOpContainer {...routeProps} oldCode={props.oldCode} newCode={props.newCode} />
        )} />
      </Switch>
    </div>
  );
};

export default Main;
