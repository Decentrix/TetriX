import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import PageContainer from './PageContainer.jsx';
// import ContractContainer from "./ContractContainer.jsx";
// import AssemblyContainer from "./AssemblyContainer.jsx";
// import ByteOpContainer from './ByteOpContainer.jsx';

const Main = (props) => {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" render={routeProps => (
          <PageContainer {...routeProps} data={props} type='contract' source={props.source} />
        )} />
        <Route path="/assembly" render={routeProps => (
          <PageContainer {...routeProps} data={props} type='assembly' source={props.source} />
        )} />
        <Route path="/bytecodeOpcode" render={routeProps => (
          <PageContainer {...routeProps} data={props} type='byteOpCode' source={props.source} />
        )} />
         <Route path="/interface" render={routeProps => (
          <PageContainer {...routeProps} data={props} type='interface' source={props.source} />
        )} />
      </Switch>
    </div>
  );
};

export default Main;
