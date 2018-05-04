import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButtom from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContractContainer from './ContractContainer.jsx';
import Assembly from './Assembly.jsx';


class Navigation extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <div>
            <Drawer className="navigation"
            containerStyle={{'position': 'absolute', 'top': '64px', 'width': '100px'}}>
              <MenuItem><NavLink exact to="/">C</NavLink></MenuItem>
              <MenuItem><NavLink exact to="/assembly">A</NavLink></MenuItem>
              <MenuItem>B+O</MenuItem>
              <MenuItem>G</MenuItem>
              <MenuItem>I</MenuItem>
            </Drawer>
          </div>
        </Router>
      </MuiThemeProvider>
    )
  }
}

export default Navigation;