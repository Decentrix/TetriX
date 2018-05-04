import React, { Component } from 'react';
import OptCodeContainer from './OptCodeContainer.jsx';


const OptimizedContract = (props) => {
  const txCost = props.optCost;

  return (
    <div className="optContainer">
      <ul className="name"><b>OPTIMIZED</b></ul>
      <OptCodeContainer optCode={props.optCode}/>
      <ul className="txCost"><b>Transaction Cost</b>: {txCost}</ul>
    </div>
  )
}


export default OptimizedContract;