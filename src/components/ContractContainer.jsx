import React, { Component } from 'react';
import OriginalContract from './OriginalContract.jsx';
import CenterPane from './CenterPane.jsx';
import OptimizedContract from './OptimizedContract.jsx';


class ContractContainer extends Component {
  render() {
    return (
      <div className="contractContainer">
        <OriginalContract orgCode={this.props.orgCode}/>
        <CenterPane orgCode={this.props.orgCode}  optCode={this.props.optCode}/>
        <OptimizedContract optCode={this.props.optCode}/>
      </div>
    );
  }
}

export default ContractContainer;