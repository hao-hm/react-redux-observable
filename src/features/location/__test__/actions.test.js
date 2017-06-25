import actions from '../actions';
import ACTION_TYPE from '../actionType';

describe('Location actions', () => {
  describe('fetch start', () => {
    it('should return correct type ', () => {
      const expectedResult = {
        type: ACTION_TYPE.FETCH_START,
      };
      expect(actions.fetchStart()).toEqual(expectedResult);
    })
  })

  describe('fetch success', () => {
    it('should return correct type the passed data', () => {
      const data = [{id: 12}];
      const expectedResult = {
        type: ACTION_TYPE.FETCH_SUCCESS,
        data
      };
      expect(actions.fetchSuccess(data)).toEqual(expectedResult);
    })
  })

  describe('fetch error', () => {
    it('should return correct type and the error', () => {
      const error = 'Failed Ajax Call';
      const expectedResult = {
        type: ACTION_TYPE.FETCH_ERROR,
        error
      };
      expect(actions.fetchError(error)).toEqual(expectedResult);
    })
  })
});