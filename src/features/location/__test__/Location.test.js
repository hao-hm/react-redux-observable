import React from 'react';
import { shallow } from 'enzyme';
import {Location} from '../Location';
import LocationList from '../LocationList';
import LocationForm from "../LocationForm";
import Alert from "../../../components/Alert";

describe('Location component', () => {
  it('Should render LocationList if current mode is VIEW_MODE', () => {
    const enzymeWrapper = shallow(<Location mode="VIEW_MODE"/>);
    expect(enzymeWrapper.contains(<LocationList/>)).toEqual(true);
  });

  it('Should render LocationForm if current mode is CREATE_MODE', () => {
    const enzymeWrapper = shallow(<Location mode="CREATE_MODE"/>);
    expect(enzymeWrapper.contains(<LocationForm/>)).toEqual(true);
  });

  it('Should render Alert if there is any error', () => {
    const error = 'Failed';
    const enzymeWrapper = shallow(<Location error={error}/>);
    expect(enzymeWrapper.contains(<Alert message={error}/>)).toEqual(true);
  });

});