import createActionType from './actionType';


export function createAction(type, ...argNames) {
  return function(...args) {
    let action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    });
    return action
  }
}

export default function generateAction(module) {
  const ACTION_TYPE = createActionType(module);
  const action = {
    fetchStart: createAction(ACTION_TYPE.FETCH_START),
    fetchSuccess: createAction(ACTION_TYPE.FETCH_SUCCESS, 'data'),
    fetchError: createAction(ACTION_TYPE.FETCH_ERROR, 'error'),
    fetchCanceled: createAction(ACTION_TYPE.FETCH_CANCELED),

    createStart: createAction(ACTION_TYPE.CREATE_START, 'payload'),
    createSuccess: createAction(ACTION_TYPE.CREATE_SUCCESS, 'data'),
    createError: createAction(ACTION_TYPE.CREATE_ERROR, 'error'),
    createCanceled: createAction(ACTION_TYPE.CREATE_CANCELED),

    updateStart: createAction(ACTION_TYPE.UPDATE_START, 'id', 'payload'),
    updateSuccess: createAction(ACTION_TYPE.UPDATE_SUCCESS, 'data'),
    updateError: createAction(ACTION_TYPE.UPDATE_ERROR, 'error'),
    updateCanceled: createAction(ACTION_TYPE.UPDATE_CANCELED),

    deleteStart: createAction(ACTION_TYPE.DELETE_START, 'id'),
    deleteSuccess: createAction(ACTION_TYPE.DELETE_SUCCESS),
    deleteError: createAction(ACTION_TYPE.DELETE_ERROR, 'error'),
    deleteCanceled: createAction(ACTION_TYPE.DELETE_CANCELED),

    changeMode: createAction(ACTION_TYPE.CHANGE_MODE, 'mode'),

    setCurrent: createAction(ACTION_TYPE.SET_CURRENT, 'current')
  };
  return action;

}