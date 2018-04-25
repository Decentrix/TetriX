import React, { Component } from 'react';


class OptCodeContainer extends Component {
  render() {
    const num = 1;
    // const optCode = ['contract Lottery {', 'int a', 'uint []'];
    const optCode = this.props.optCode;
    const listCode = optCode.map((code, i) =>
      <div className="lineContainer" id={i} key={i}>
        <div className="lineNum" id={i}>{i + num}</div>
        <div className="code" id={i}>{code}</div>
      </div>
    );

    return (
      <div className="codeWrapper">
        {listCode}
      </div>
    );
  }
}

export default OptCodeContainer;