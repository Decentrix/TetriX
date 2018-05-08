import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButtom from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


const Navigation = (props) => {
	const removeUnderline = {textDecoration: 'none'}
	return (
		<MuiThemeProvider>
			<Drawer className="navigation"
			containerStyle={{'position': 'absolute', 'bottom': '0px', 'width': '150px', 'borderTop': 'solid 65px rgba(0,0,0,0.16)', 'zIndex': '0'}}>
				<NavLink exact to="/" style={removeUnderline}><MenuItem>C</MenuItem></NavLink>
				<NavLink to="/assembly" style={removeUnderline}><MenuItem>A</MenuItem></NavLink>
				<NavLink to="/bytecodeOpcode" style={removeUnderline}><MenuItem>B+O</MenuItem></NavLink>
				<NavLink to="/interface" style={removeUnderline}><MenuItem>I</MenuItem></NavLink>
				<MenuItem style={{wordWrap: 'break-word', whiteSpace: 'normal', bottom: '0px'}}><b>GAS DIFFERENCE</b>: {props.difference}</MenuItem>
			</Drawer>
		</MuiThemeProvider>
	)
}

export default Navigation;