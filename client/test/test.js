import React, { Component } from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import App from './../src/components/App.jsx';

describe('<App />', () => {
	let mountedApp;
	const app = () => {
		if(!mountedApp) {
			mountedApp = mount(
				<App />
			)
		}
		return mountedApp;
	}

	beforeEach( () => {
		mountedApp = undefined;
	});

	it('always renders a div', () => {
		const divs = app().find('div');
		expect(divs.length).toBeGreaterThan(0);
	})
})