import React, { Component } from "react";
import Code from "./Code.jsx";

const Contract = (props) => {
  return (
    <div className="codeContainer">
      <Code code={props.code.source} />
			<ul className="txCost"><b>Transaction Cost</b>: {props.code.gasEst}</ul>
    </div>
  );
};

export default Contract;
