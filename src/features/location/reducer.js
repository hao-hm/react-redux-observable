// @flow
import { fromJS } from 'immutable';
import {MODULE_NAME} from './constants';
import {createReducers} from '../../util/createReducer';
import {VIEW_MODE} from '../../util/actionType';

const initialState = fromJS({
  loading: false,
  error: '',
  data: [],
  mode: VIEW_MODE,
});

export default createReducers(initialState, MODULE_NAME);
