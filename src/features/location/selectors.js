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


export {
  makeSelectData,
  makeSelectLoading,
  makeSelectLoading,
  makeSelectError
};
