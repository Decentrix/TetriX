import React, { Component } from 'react';


class OgCodeContainer extends Component {
  render() {
    const num = 1;
    const ogCode = this.props.orgCode;
    const listCode = ogCode.map((code, i) =>
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

export default OgCodeContainer;