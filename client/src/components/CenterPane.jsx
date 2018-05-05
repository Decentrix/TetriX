import React, { Component } from 'react';
import { Card } from 'material-ui/Card';
import OgCodeContainer from './OgCodeContainer.jsx';
import OptCodeContainer from './OptCodeContainer.jsx';


const CenterPane = () => {
  return (
    <div className="centerPiece">
      <Card>
        <div className="cardName"><b>CHANGES MADE</b></div>
        <div className="gasBox">
          This is where the gas changes go
        </div>
      </Card>
    </div>
  )
}

export default CenterPane;