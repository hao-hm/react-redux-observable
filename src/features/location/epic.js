import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import {VIEW_MODE} from '../../util/actionType';
import actions from './actions';
import ACTION_TYPE from './actionType';

export const fetchLocationEpic = (action$: ActionsObservable): ActionsObservable =>
  action$.ofType(ACTION_TYPE.FETCH_START)
    .mergeMap(function (action) {
      return Observable.ajax.getJSON(`/locations?sortBy=createdAt&order=desc`)
        .map(function (response) {
          return actions.fetchSuccess(response)
        })
        .takeUntil(action$.ofType(actions.fetchCanceled()))
        .catch(err => Observable.of(actions.fetchError(err.message)));

    });


export const createLocationEpic = (action$: ActionsObservable): ActionsObservable =>
  action$.ofType(ACTION_TYPE.CREATE_START)
    .switchMap((action) =>
      Observable.ajax.post(`/locations`, action.payload)
        .flatMap(response => Observable.concat(
          Observable.of(actions.createSuccess(response)),
          Observable.of(actions.changeMode(VIEW_MODE))
        ))
        .takeUntil(action$.ofType(actions.createCanceled()))
        .catch(err => Observable.of(actions.createError(err)))
    );

export const updateLocationEpic = (action$: ActionsObservable): ActionsObservable =>
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


export const deleteLocationEpic = (action$: ActionsObservable): ActionsObservable =>
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




