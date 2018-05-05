import React, { Component } from "react";

const OptCodeContainer = props => {
  const num = 1;
  const optCode = props.code;
  const listCode = optCode.map((code, i) => (
    <div className="lineContainer" id={i} key={i}>
      <div className="lineNum" id={i}>
        {i + num}
      </div>
      <div style={{whiteSpace: 'pre-wrap'}} className="code" id={i}>
        {code}
      </div>
    </div>
  ));

  return <div className="codeWrapper">{listCode}</div>;
};

export default OptCodeContainer;
