import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButtom from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ListItem } from 'material-ui';

class Navigation extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Drawer className="navigation"
          containerStyle={{'position': 'absolute', 'top': '64px', 'width': '150px'}}>
            <ListItem>C</ListItem>
            <ListItem>A</ListItem>
            <ListItem>B+O</ListItem>
            <ListItem>G</ListItem>
            <ListItem>I</ListItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Navigation;