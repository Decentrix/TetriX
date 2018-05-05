import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButtom from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ContractContainer from './ContractContainer.jsx';
import Assembly from './Assembly.jsx';


const Navigation = () => {
	const removeUnderline = {textDecoration: 'none'}
	return (
		<MuiThemeProvider>
			<Drawer className="navigation"
			containerStyle={{'position': 'absolute', 'bottom': '0px', 'width': '100px', 'border-top': 'solid 65px rgba(0,0,0,0.16)', 'z-index': '0'}}>
				<NavLink exact to="/" style={removeUnderline}><MenuItem>C</MenuItem></NavLink>
				<NavLink to="/assembly" style={removeUnderline}><MenuItem>A</MenuItem></NavLink>
				<MenuItem style={removeUnderline}>B+O</MenuItem>
				<MenuItem style={removeUnderline}>G</MenuItem>
				<MenuItem style={removeUnderline}>I</MenuItem>
			</Drawer>
		</MuiThemeProvider>
	)
}

export default Navigation;