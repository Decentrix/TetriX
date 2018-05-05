import React, { Component } from "react";
import Assembly from './Assembly.jsx';

const AssemblyContainer = (props) => {
	// console.log(props);
  return (
    <div className="assembly">
			<Assembly code={props.oldCode.info.assembly} name={'ORIGINAL'} />
			<Assembly code={props.newCode.info.assembly} name={'OPTIMIZED'} />
    </div>
  );
};

export default AssemblyContainer;
