import React from 'react';
import Contract from './Contract.jsx';
import Assembly from './Assembly.jsx';
import ByteOpCode from './ByteOpCode.jsx';


const SectionComponent = (props) => {
	const types = [];
  
  if(props.type === 'contract') {
    types.push(<Contract key={Math.random*100}code={props.contract} />);
  }

  if(props.type === 'assembly') {
   types.push(<Assembly key={Math.random*100} assembly={props.contract.info.assembly}/>);
  }

  if(props.type === 'byteOpCode') {
    types.push(<ByteOpCode key={Math.random*100} info={props.contract.info}/>);
  }

  return (
    <div className="secComponent">
      {types}
    </div>
  )
}

export default SectionComponent;