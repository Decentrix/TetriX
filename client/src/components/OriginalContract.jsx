import React, { Component } from 'react';
import OgCodeContainer from './OgCodeContainer.jsx';



const OriginalContract = (props) => {
  const txCost = props.orgCost

  return (
  <div className="ogContainer">
    <ul className="name"><b>ORIGINAL</b></ul>
    <OgCodeContainer orgCode={props.orgCode}/>
    <ul className="txCost"><b>Transaction Cost</b>: {txCost}</ul>
  </div>

  )

}


export default OriginalContract;