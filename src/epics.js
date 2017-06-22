import { combineEpics } from 'redux-observable';
import {fetchLocationEpic, createLocationEpic, updateLocationEpic, deleteLocationEpic} from './features/location/epic';

export const rootEpic = combineEpics(
  fetchLocationEpic,
  createLocationEpic,
  updateLocationEpic,
  deleteLocationEpic
);
