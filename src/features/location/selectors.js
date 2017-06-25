import { createSelector } from 'reselect';

const selectLocation = (state) => state.get('location');

const makeSelectData = () => createSelector(
  selectLocation,
  (locationState) => locationState.get('data')
);

const makeSelectLoading = () => createSelector(
  selectLocation,
  (selectLocation) => selectLocation.get('loading')
);
const makeSelectError = () => createSelector(
  selectLocation,
  (selectLocation) => selectLocation.get('error')
);

const makeSelectMode = () => createSelector(
  selectLocation,
  (selectLocation) => selectLocation.get('mode')
);

const makeSelectCurrent = () => createSelector(
  selectLocation,
  (selectLocation) => selectLocation.get('current')
);


export {
  selectLocation,
  makeSelectData,
  makeSelectLoading,
  makeSelectError,
  makeSelectMode,
  makeSelectCurrent
};
