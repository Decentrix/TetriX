import React from 'react';



const SectionHeader = (props) => {
  return (
    <div className="secHeader">
      <b>{props.version}</b>
    </div>
  )
}

export default SectionHeader;