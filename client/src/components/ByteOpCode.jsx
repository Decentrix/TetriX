import React from 'react';

const ByteOpCode = (props) => {
  // console.log('THIS IS OLD OPCODE---------->', props.oldOpcode);
  return (
  <div className="outerContainer">
    <div className="codeContainer">
      <div className="innerContainer">
        <ul className="test">
          <b>{props.nameOg}</b>
          <div className="code"><b>BYTECODE: </b>{props.oldByteCode}</div>
        </ul>
      </div>
    </div>
    <div className="codeContainer">
      <div className="innerContainer">
        <ul className="test">
          <b>{props.nameOp}</b>
          <div className="code"><b>BYTECODE: </b>{props.oldByteCode}</div>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default ByteOpCode;