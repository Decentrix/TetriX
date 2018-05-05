import React, { Component } from "react";
import OgCodeContainer from "./OgCodeContainer.jsx";

const OriginalContract = (props) => {
  return (
    <div className="ogContainer">
      <ul className="name">
        <b>ORIGINAL</b>
      </ul>
      <OgCodeContainer code={props.oldCode.source} />
			<ul className="txCost"><b>Transaction Cost</b>: {props.oldCode.gasEst}</ul>
    </div>
  );
};

export default OriginalContract;
