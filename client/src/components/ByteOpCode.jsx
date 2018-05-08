import React from 'react';

const ByteOpCode = (props) => {
  return (
    <div className="innerContainer">
      <div className="byteCode"><b>BYTECODE: </b>{props.info.bytecode}</div>
      <div className="opCode"><b>OPCODE:</b>{props.info.opcodes}</div>
    </div>
  )
}

export default ByteOpCode;