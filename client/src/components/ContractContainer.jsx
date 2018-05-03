import React, { Component } from 'react';
import OriginalContract from './OriginalContract.jsx';
import CenterPane from './CenterPane.jsx';
import OptimizedContract from './OptimizedContract.jsx';


class ContractContainer extends Component {
  render() {
    return (
      <div className="contractContainer">
        <OriginalContract orgCode={this.props.orgCode} orgCost={this.props.orgCost}/>
        <CenterPane orgCode={this.props.originalCode} optCode={this.props.optimizedCode}/>
        <OptimizedContract optCode={this.props.optCode} optCost={this.props.optCost}/>
      </div>
    );
  }
}

export default ContractContainer;