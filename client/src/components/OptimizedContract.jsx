import React, { Component } from "react";
import OptCodeContainer from "./OptCodeContainer.jsx";

const OptimizedContract = props => {
  return (
    <div className="optContainer">
      <ul className="name">
        <b>OPTIMIZED</b>
      </ul>
      <OptCodeContainer code={props.newCode.source} />
			<ul className="txCost"><b>Transaction Cost</b>: {props.newCode.gasEst}</ul>
    </div>
  );
};

export default OptimizedContract;
