import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import 'rxjs';
import { createEpicMiddleware } from 'redux-observable';
import createReducer from './reducers';
import { rootEpic } from './epics';

const epicMiddleware = createEpicMiddleware(rootEpic);

export default function configureStore(initialState = {}) {
  const middlewares = [
    epicMiddleware
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    fromJS(initialState),
    composeEnhancers(...enhancers)
  );


  return store;
}
