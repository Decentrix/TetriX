import React, { Component } from "react";

const Code = props => {
  const listCode = props.code.map((code, i) => (
    <li className="lineContainer" id={i} key={i}>
      <div className="lineNum" id={i}>
        {i + 1}
      </div>
      <div style={{ whiteSpace: "pre-wrap" }} className="code" id={i}>
        {code}
      </div>
    </li>
  ));

  return (
    <div className="codeWrapper">
      <ul className="codeList">{listCode}</ul>
    </div>
  );
};

export default Code;
