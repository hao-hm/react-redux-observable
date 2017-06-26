import { ActionsObservable } from 'redux-observable';
import {Observable} from "rxjs/Observable";
import {fetchLocationEpic} from '../epic';
import actions from '../actions';

describe('fetchLocationEpic', () => {

  let getJSONBackup;

  beforeEach(() => {
    getJSONBackup = Observable.ajax.getJSON;
  });

  afterEach(() => {
    Observable.ajax.getJSON = getJSONBackup;
  });


  it("dispatches a result action when data is loaded", () => {
    const response = [{id: 12}];
    Observable.ajax.getJSON = jest.fn().mockReturnValueOnce(Observable.of(response));
    const action$ = ActionsObservable.of(actions.fetchStart());
    const expectedAction = actions.fetchSuccess(response);
    fetchLocationEpic(action$)
      .subscribe(actualAction => {
        expect(actualAction).toEqual(expectedAction);
      });
  });

  it('dispatches an error action when ajax fails', () => {
    const error = 'Failed Ajax Call';
    Observable.ajax.getJSON = jest.fn().mockReturnValueOnce(Observable.throw(new Error(error)));
    const action$ = ActionsObservable.of(actions.fetchStart());
    const expectedAction = actions.fetchError(error);
    fetchLocationEpic(action$)
      .subscribe(actualAction => {
        expect(actualAction).toEqual(expectedAction);
      });
  });


});
