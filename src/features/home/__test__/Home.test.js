import React from 'react';
import { shallow } from 'enzyme';
import Home from '../Home';
describe('Home component', () => {
  it('Should render Home component successfully', () => {
    const enzymeWrapper = shallow(<Home />);
    expect(enzymeWrapper.find('div').text()).toBe('Home');
  });
});