import React, { Component } from "react";

const Assembly = (props) => {
  return (
    <div className="assembly">
			<ul className="name">
				<b>{props.name}</b>
			</ul>
    </div>
  );
};

export default Assembly;