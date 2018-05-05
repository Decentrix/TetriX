import React from 'react';

const OldByteOpCode = (props) => {
  // console.log(props);
  return (
    <div className="codeContainer">
     {/* <div className="boContainer">{props.oldByteCode}</div>  */}
      <div className="oldContract">
        <div>{props.oldByteOpCode}</div>
        <div></div>
      </div>
    </div>
  )
}

export default OldByteOpCode;