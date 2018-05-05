import React, { Component } from 'react';
import Contract from './Contract.jsx';
import CenterPane from './CenterPane.jsx';


const ContractContainer = (props) => {
    return (
      <div className="contractContainer">
        <Contract code={props.data.oldCode} name={"ORIGINAL"}/>
        {/* <CenterPane orgCode={this.props.originalCode} optCode={this.props.optimizedCode}/> */}
        <Contract code={props.data.newCode} name={"OPTIMIZED"}/>
      </div>
    );
}

export default ContractContainer;