import React from "react";

const ByteOpCode = props => {
	const opList = props.info.opcodes.split(' ').map(op => {
		return <li>{op}</li>;
	})
  return (
    <div className="innerContainer">
      <b>BYTECODE: </b>
      <div className="byteCode">{props.info.bytecode}</div>
      <b>ABI: </b>
      <div className="interface">{props.info.interface}</div>
      <b>OPCODE: </b>
      <div className="opCode">{opList}</div>
    </div>
  );
};

export default ByteOpCode;
