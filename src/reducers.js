import { combineReducers } from 'redux-immutable';
import { locationReducer } from './features/location';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer() {
  return combineReducers({
    location: locationReducer,
  });
}
