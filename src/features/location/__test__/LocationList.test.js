import React from 'react';
import { shallow, mount } from 'enzyme';
import { LocationList, mapDispatchToProps } from '../LocationList';
import Loading from '../../../components/Loading';
import Table from "../../../components/Table";
import actions from '../actions';

describe('LocationList component', () => {
  it('Should render Loading component when its loading', () => {
    const renderedComponent = shallow(<LocationList loading/>);
    expect(renderedComponent.contains(<Loading loading/>)).toEqual(true);
  });

  it('Should render Table component successfully', () => {
    const data = [{id: 1, name: 'test', description: 'test'}];
    const renderedComponent = shallow(<LocationList loading={false} locations={data}/>);
    expect(renderedComponent.find('Table').length).toBe(1);
  });

  it('should call fetchStart on mount', () => {
    const action = {
      fetchStart: jest.fn()
    };
    mount(
      <LocationList locations={[]} action={action}/>
    );
    expect(action.fetchStart).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('action', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.action).toBeDefined();
      });

      it('should dispatch fetchStart when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.action.fetchStart();
        expect(dispatch).toHaveBeenCalledWith(actions.fetchStart());
      });
    });
  });

});