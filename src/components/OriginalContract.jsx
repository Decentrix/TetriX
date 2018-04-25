import React, { Component } from 'react';
import OgCodeContainer from './OgCodeContainer.jsx';



class OriginalContract extends Component {
  render() {
    const txCost = ['240000 ETH'];

    return (
      <div className="ogContainer">
        <ul className="name"><b>ORIGINAL</b></ul>
        <OgCodeContainer orgCode={this.props.orgCode}/>
        <ul className="txCost"><b>Transaction Cost</b>: {txCost}</ul>
      </div>
    );
  }
}

export default OriginalContract;