import React, { Component } from "react";
import Navigation from "./Navigation.jsx";
import Main from "./Main.jsx";

const MainContainer = () => {
  return (
    <div className="mainContainer">
      <Navigation />
			<Main />
    </div>
  );
};

export default MainContainer;
