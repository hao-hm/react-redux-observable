import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_CANCELED
} from './constants';

export function fetchStart() {
  return {
    type: FETCH_START,
  };
}


export function fetchSuccess(data) {
  return {
    type: FETCH_SUCCESS,
    data
  };
}

export function fetchError(error) {
  return {
    type: FETCH_ERROR,
    error,
  };
}


export function fetchCanceled() {
  return {
    type: FETCH_CANCELED,
  };
}
