import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButtom from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContractContainer from './ContractContainer.jsx';
import Assembly from './Assembly.jsx';


const Navigation = () => (
  <MuiThemeProvider>
      <Drawer className="navigation"
        containerStyle={{ 'position': 'absolute', 'top': '64px', 'width': '100px' }}>
        <NavLink style={{ textDecoration: 'none' }} exact to="/"><MenuItem>C</MenuItem></NavLink>
        <NavLink style={{ textDecoration: 'none' }} to="/assembly"><MenuItem>A</MenuItem></NavLink>
        <NavLink style={{ textDecoration: 'none' }} to="/bytecodeOpcode"><MenuItem>B+O</MenuItem></NavLink>
        <NavLink style={{ textDecoration: 'none' }} to="/interface"><MenuItem>I</MenuItem></NavLink>
      </Drawer>
  </MuiThemeProvider>
)

export default Navigation;