import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../NotFound';
describe('NotFound component', () => {
  it('Should render NotFound component successfully', () => {
    const enzymeWrapper = shallow(<NotFound />);
    expect(enzymeWrapper.find('div').text()).toBe('Not Found');
  });
});