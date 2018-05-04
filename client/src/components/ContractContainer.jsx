import React, { Component } from 'react';
import OriginalContract from './OriginalContract.jsx';
import CenterPane from './CenterPane.jsx';
import OptimizedContract from './OptimizedContract.jsx';


const ContractContainer = (props) => (
  <div className="contractContainer">
    <OriginalContract orgCode={props.orgCode} orgCost={props.orgCost}/>
    {/* <CenterPane orgCode={props.originalCode} optCode={props.optimizedCode}/> */}
    <OptimizedContract optCode={props.optCode} optCost={props.optCost}/>
  </div>

)

export default ContractContainer;