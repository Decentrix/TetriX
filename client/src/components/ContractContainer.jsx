import React, { Component } from 'react';
import OriginalContract from './OriginalContract.jsx';
import CenterPane from './CenterPane.jsx';
import OptimizedContract from './OptimizedContract.jsx';


const ContractContainer = (props) => {
		console.log(props);
    return (
      <div className="contractContainer">
        <OriginalContract oldCode={props.data.oldCode}/>
        {/* <CenterPane orgCode={this.props.originalCode} optCode={this.props.optimizedCode}/> */}
        <OptimizedContract newCode={props.data.newCode}/>
      </div>
    );
}

export default ContractContainer;