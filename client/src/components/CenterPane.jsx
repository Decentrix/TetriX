import React, { Component } from 'react';


class CenterPane extends Component {
  render() {

    return (
      <div className="centerPiece">
        <div>CHANGES MADE: </div>
        <div className="lineContainer" id="changeOne">
          <div className="lineNum">{4}</div>
          <div className="code" style={{whiteSpace:'pre-wrap'}}>{'uint 8 a;'}</div>
        </div>
      <div>
        

      </div>
        <div className="lineContainer" id="changeTwo">
          <div className="lineNum">{7}</div>
          <div className="code" style={{whiteSpace:'pre-wrap'}}>{'uint 8 a;'}</div>
        </div>
      </div>
    )
  }
}

export default CenterPane;