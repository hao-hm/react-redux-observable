import { fromJS } from 'immutable';

import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_CANCELED
} from './constants';


// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  data: false
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_START:
      return state
        .set('loading', true)
        .set('error', false)
        .set('data', false);
    case FETCH_SUCCESS:
      return state
        .setIn('data', action.data)
        .set('loading', false)
        .set('error', false);
    case FETCH_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    case FETCH_CANCELED:
      return state
        .set('error', false)
        .set('loading', false);
    default:
      return state;
  }
}

export default reducer;
