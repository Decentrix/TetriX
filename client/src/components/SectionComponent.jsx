import React from 'react';
import Contract from './Contract.jsx';
import Assembly from './Assembly.jsx';
import ByteOpCode from './ByteOpCode.jsx';
import Interface from './Interface.jsx';


const SectionComponent = (props) => {
  const types = [];
  
  if(props.type === 'contract') {
    types.push(<Contract code={props.contract} />);
  }

  if(props.type === 'assembly') {
   types.push(<Assembly assembly={props.contract.info.assembly}/>);
  }

  if(props.type === 'byteOpCode') {
    types.push(<ByteOpCode info={props.contract.info} />);
  }

  if(props.type === 'interface') {
    types.push(<Interface abi={props.contract.info.interface}/>);
  }

  return (
    <div className="secComponent">
      {types}
    </div>
  )
}

export default SectionComponent;