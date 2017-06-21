import { ajax } from 'rxjs/observable/dom/ajax';
import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FETCH_CANCELED
} from './constants';
import {fetchSuccess, fetchCanceled} from './actions';


const fetchLocationEpic = action$ =>
  action$.ofType(FETCH_START)
    .mergeMap(action =>
      ajax.getJSON(`/locations}`)
        .map(response => fetchSuccess(response))
        .takeUntil(action$.ofType(fetchCanceled()))
    );


export default fetchLocationEpic;