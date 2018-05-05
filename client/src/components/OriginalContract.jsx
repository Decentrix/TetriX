import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import OgCodeContainer from './OgCodeContainer.jsx';



const OriginalContract = (props) => {
  const txCost = props.orgCost

  return (
    <div className="ogContainer">
      <Card>
        <div className="cardName"><b>ORIGINAL</b></div>
        <OgCodeContainer orgCode={props.orgCode} />
        <ul className="txCost"><b>Transaction Cost</b>: 435670 Gas</ul>
        {/* <ul className="txCost"><b>Transaction Cost</b>: {txCost}</ul> */}
      </Card>
    </div>
  )
}


export default OriginalContract;