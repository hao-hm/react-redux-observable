import { ajax } from 'rxjs/observable/dom/ajax';
import { Observable } from 'rxjs';
import createActionType, {VIEW_MODE} from '../../util/actionType';
import {MODULE_NAME} from './constants';
import actions from './actions';

const ACTION_TYPE = createActionType(MODULE_NAME);

export const fetchLocationEpic = action$ =>
  action$.ofType(ACTION_TYPE.FETCH_START)
    .mergeMap(action =>
      ajax.getJSON('/locations?sortBy=createdAt&order=desc')
        .map(response => actions.fetchSuccess(response))
        .takeUntil(action$.ofType(actions.fetchCanceled()))
        .catch(err => Observable.of(actions.fetchError(err)))
    );

export const createLocationEpic = action$ =>
  action$.ofType(ACTION_TYPE.CREATE_START)
    .switchMap((action) =>
      Observable.ajax.post('/locations', action.payload)
        .flatMap(response => Observable.concat(
          Observable.of(actions.createSuccess(response)),
          Observable.of(actions.changeMode(VIEW_MODE))
        ))
        .takeUntil(action$.ofType(actions.createCanceled()))
        .catch(err => Observable.of(actions.createError(err)))
    );

export const updateLocationEpic = action$ =>
  action$.ofType(ACTION_TYPE.UPDATE_START)
    .switchMap((action) =>
      Observable.ajax.put(`/locations/${action.id}`, action.payload)
        .flatMap(response => Observable.concat(
          Observable.of(actions.updateSuccess(response)),
          Observable.of(actions.changeMode(VIEW_MODE))
        ))
        .takeUntil(action$.ofType(actions.updateCanceled()))
        .catch(err => Observable.of(actions.updateError(err)))
    );


export const deleteLocationEpic = action$ =>
  action$.ofType(ACTION_TYPE.DELETE_START)
    .switchMap((action) =>
      Observable.ajax.delete(`/locations/${action.id}`)
        .flatMap(response => Observable.concat(
          Observable.of(actions.deleteSuccess(response)),
          Observable.of(actions.fetchStart())
        ))
        .takeUntil(action$.ofType(actions.deleteCanceled()))
        .catch(err => Observable.of(actions.deleteError(err)))
    );




