import React, { Component } from "react";
import Navigation from "./Navigation.jsx";
import Main from "./Main.jsx";

const MainContainer = (props) => {
  return (
    <div className="mainContainer">
      <Navigation />
			<Main oldCode={props.oldCode} newCode ={props.newCode} difference={props.difference} />
    </div>
  );
};

export default MainContainer;
