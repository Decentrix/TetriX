import React, { Component } from 'react';
import Contract from './Contract.jsx';
import CenterPane from './CenterPane.jsx';


const ContractContainer = (props) => {
    return (
      <div className="Container">
        <Contract code={props.data.oldCode} name={"ORIGINAL"}/>
        <div className="break"></div>{/* <CenterPane orgCode={this.props.originalCode} optCode={this.props.optimizedCode}/> */}
        <Contract code={props.data.newCode} name={"OPTIMIZED"}/>
      </div>
    );
}

export default ContractContainer;