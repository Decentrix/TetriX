import React from 'react';
import SectionContainer from './SectionContainer.jsx';



const PageContainer = (props) => {
  return (
    <div className="pageContainer">
      <SectionContainer type={props.type} version='Original' contract={props.source.oldContract} />
      <SectionContainer type={props.type} version='Optimized' contract={props.source.newContract}/>
    </div>
  )
}

export default PageContainer;