import nock from 'nock';
// import configureMockStore from 'redux-mock-store';
// import { createEpicMiddleware } from 'redux-observable';
// import { fetchLocationEpic } from '../epic';
// import actions from '../actions';
// import {MODULE_NAME} from '../constants';
// import createActionType from '../../../util/actionType';
//
// const epicMiddleware = createEpicMiddleware(fetchLocationEpic);
// const mockStore = configureMockStore([epicMiddleware]);
// const ACTION_TYPE = createActionType(MODULE_NAME);
//
// describe('fetchLocationEpic', () => {
//   let store;
//
//   beforeEach(() => {
//     store = mockStore();
//   });
//
//   afterEach(() => {
//     nock.cleanAll();
//     epicMiddleware.replaceEpic(fetchLocationEpic);
//   });
//
//   it('creates FETCH_SUCCESS when fetching location has been done', () => {
//     const payload = [];
//     nock('http://localhost/')
//       .get('/locations')
//       .reply(304, payload);
//
//     store.dispatch(actions.fetchStart());
//
//     expect(store.getActions()).toEqual([
//       { type: ACTION_TYPE.FETCH_START },
//       { type: ACTION_TYPE.FETCH_SUCCESS, payload }
//     ]);
//   });
// });


import {ActionsObservable} from "redux-observable";
import "rxjs/Rx";
import {Observable} from "rxjs/Observable";
import {fetchLocationEpic} from '../epic';
import actions from '../actions';

describe('fetchLocationEpic', () => {
  const response = [{id: 12}];
  beforeEach(() => {
    nock.disableNetConnect();

    nock('http://594aece43dee430011f09f7d.mockapi.io/')
      .get('/locations?sortBy=createdAt&order=desc')
      .reply(200, response, {'Access-Control-Allow-Origin': '*'});

  });

  afterEach(() => nock.cleanAll());

  it("dispatches a result action when data is loaded", () => {

    const action$ = ActionsObservable.of(actions.fetchStart());
    const expectedOutputActions = actions.fetchSuccess(response);
    fetchLocationEpic(action$)
      .subscribe(actionReceived => {
        console.log('actionReceived', actionReceived)
        console.log('expectedOutputActions', expectedOutputActions)
        expect(actionReceived).toEqual(expectedOutputActions);

      });

  });

  it('dispatches an error action when ajax fails', () => {
    const error = 'Failed Ajax Call';
    const dependencies = {
      getJSON: url => Observable.throw(new Error(error))
    };
    const action$ = ActionsObservable.of(actions.fetchStart());
    const expectedOutputAction = actions.fetchError(error);

    fetchLocationEpic(action$, null, dependencies)
      .subscribe(actionReceived => {
        expect(actionReceived.type).toBe(expectedOutputAction.type);
        // expect(actionReceived.error).toBe(expectedOutputAction.error);
      });

  });


});
