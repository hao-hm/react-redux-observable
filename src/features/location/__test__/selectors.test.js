import { fromJS } from 'immutable';

import {
  selectLocation,
  makeSelectData,
  makeSelectLoading,
  makeSelectError
} from '../selectors';

describe('selectLocation', () => {
  it('should select the location state', () => {
    const locationState = fromJS({});
    const mockedState = fromJS({
      location: locationState,
    });
    expect(selectLocation(mockedState)).toEqual(locationState);
  });
});

describe('makeSelectData', () => {
  const dataSelector = makeSelectData();
  it('should select the current user', () => {
    const data = fromJS([{id: 1}]);
    const mockedState = fromJS({
      location: {
        data
      }
    });
    expect(dataSelector(mockedState)).toEqual(data);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      location: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 'Failed';
    const mockedState = fromJS({
      location: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});