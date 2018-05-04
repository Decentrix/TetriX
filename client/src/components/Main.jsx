import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ContractContainer from "./ContractContainer.jsx";
import Assembly from "./Assembly.jsx";

const Main = (props) => (
  <div className="main">
    <Switch>
      <Route exact path="/" component={ContractContainer} />
      <Route path="/assembly" component={Assembly} />
    </Switch>
  </div>
);

export default Main;
