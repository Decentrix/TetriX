import React from 'react';
import ByteOpCode from './ByteOpCode.jsx';

const ByteOpContainer = (props) => {
  // console.log(props.newCode.info);
  return (
    <div className="bytecodeOpContainer">
      <ByteOpCode oldByteCode={props.oldCode.info.bytecode} oldOpcode={props.oldCode.info.opcodes} name={'ORIGINAL'}/>
      <ByteOpCode newByteCode={props.newCode.info.bytecode} newOpcode={props.newCode.info.opcodes} name={'OPTIMIZED'}/>
    </div>
  )
}

export default ByteOpContainer;