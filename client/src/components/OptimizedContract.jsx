import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import OptCodeContainer from './OptCodeContainer.jsx';


const OptimizedContract = (props) => {
  const txCost = props.optCost;

  return (
    <div className="optContainer">
      <Card>
        <div className="cardName"><b>OPTIMIZED</b></div>
        <OptCodeContainer optCode={props.optCode} />
        <ul className="txCost"><b>Transaction Cost</b>: 300000 Gas</ul>
      </Card>
    </div>
  )
}


export default OptimizedContract;