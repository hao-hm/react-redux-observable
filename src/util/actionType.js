export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const FETCH_CANCELED = 'FETCH_CANCELED';

export const CREATE_START = 'CREATE_START';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const CREATE_ERROR = 'CREATE_ERROR';
export const CREATE_CANCELED = 'CREATE_CANCELED';


export const UPDATE_START = 'UPDATE_START';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS';
export const UPDATE_ERROR = 'UPDATE_ERROR';
export const UPDATE_CANCELED = 'UPDATE_CANCELED';


export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_ERROR = 'DELETE_ERROR';
export const DELETE_CANCELED = 'DELETE_CANCELED';

export const CHANGE_MODE = 'CHANGE_MODE';
export const VIEW_MODE = 'VIEW_MODE';
export const CREATE_MODE = 'CREATE_MODE';
export const EDIT_MODE = 'EDIT_MODE';

export const SET_CURRENT = 'SET_CURRENT';

const defaultTypes = [
  FETCH_START, FETCH_SUCCESS, FETCH_ERROR, FETCH_CANCELED,
  CREATE_START, CREATE_SUCCESS, CREATE_ERROR, CREATE_CANCELED,
  UPDATE_START, UPDATE_SUCCESS, UPDATE_ERROR, UPDATE_CANCELED,
  DELETE_START, DELETE_SUCCESS, DELETE_ERROR, DELETE_CANCELED,
  CHANGE_MODE, SET_CURRENT
];

export default function createActionType(namespace, constants = defaultTypes) {
  return Object.freeze(
    constants.reduce((obj, constant) => {
      return {
        ...obj,
        [constant]: `${namespace}/${constant}`
      }
    }, {})
  )
}