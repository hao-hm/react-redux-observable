import React from 'react';
import {shallow} from 'enzyme';
import About from '../About';

describe('About component', () => {
  it('Should render about component successfully', () => {
    const enzymeWrapper = shallow(<About />);
    expect(enzymeWrapper.find('div').text()).toBe('About');
  });
});



