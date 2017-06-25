import { fromJS } from 'immutable';
import reducer from '../reducer';
import actions from '../actions';
import ACTION_TYPE from '../actionType';

describe('Location Reducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: '',
      data: [],
      mode: 'VIEW_MODE',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(reducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the FETCH_START action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', '');
    expect(reducer(state, actions.fetchStart())).toEqual(expectedResult);
  });


  it('should handle the FETCH_SUCCESS action correctly', () => {
    const data = [{id: 1}];
    const expectedResult = state
      .set('data', data)
      .set('loading', false)
      .set('error', '')
    expect(reducer(state, actions.fetchSuccess(data))).toEqual(expectedResult);
  });

  it('should handle the FETCH_ERROR action correctly', () => {
    const error = 'Failed Ajax Call';
    const expectedResult = state
      .set('error', error)
      .set('loading', false);
    expect(reducer(state, actions.fetchError(error))).toEqual(expectedResult);
  });


});
