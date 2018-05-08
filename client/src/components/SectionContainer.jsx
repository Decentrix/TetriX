import React from 'react';
import SectionHeader from './SectionHeader.jsx';
import SectionComponent from './SectionComponent.jsx';

const SectionContainer = (props) => {
  return (
    <div className="sectionContainer">
      {/* {props.type} {props.version} */}
      <SectionHeader version={props.version}/>
      <SectionComponent type={props.type} version={props.version} contract={props.contract}/>
    </div>
  )
}

export default SectionContainer;