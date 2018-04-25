import React, { Component } from 'react';
import OptCodeContainer from './OptCodeContainer.jsx';


class OptimizedContract extends Component {
  render() {
    const txCost = ['220000 ETH'];

    return (
      <div className="optContainer">
        <ul className="name"><b>OPTIMIZED</b></ul>
        <OptCodeContainer optCode={this.props.optCode}/>
        <ul className="txCost"><b>Transaction Cost</b>: {txCost}</ul>
      </div>
    )
  }
}

export default OptimizedContract;