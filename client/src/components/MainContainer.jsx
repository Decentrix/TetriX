import React, { Component } from "react";
import Navigation from "./Navigation.jsx";
import Main from "./Main.jsx";

const MainContainer = (props) => {
  return (
    <div className="mainContainer">
      <Navigation difference={props.source.difference} />
			<Main source={props.source} />
    </div>
  );
};

export default MainContainer;
