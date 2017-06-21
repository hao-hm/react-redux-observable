import { combineEpics } from 'redux-observable';
import fetchLocationEpic from './features/location/epic';

export const rootEpic = combineEpics(
  fetchLocationEpic
);
