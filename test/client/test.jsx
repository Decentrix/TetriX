import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import App from './../../client/src/components/App.jsx';

describe('<App />', () => {
	it('renders Header and MainContainer', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.contains(<Header />)).to.equal(true);
		expect(wrapper.contains(<MainContainer />)).to.equal(true);
	})
})