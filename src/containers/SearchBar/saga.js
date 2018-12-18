import { call, takeLatest, put, select } from 'redux-saga/effects';
import { searchBarSubmitQuery } from './actions';
import { searchResults, searchResultsLoading, searchResultsError } from '../SearchResults/actions';
import { makeSelectSearchValue, makeSelectFilter } from './selectors';
import { encodeFilterByName } from '../../utils/filtersEncode';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

export function* submitQuerySaga() {
  yield put(searchResultsLoading(true));
  yield put(searchResultsError(null));

  const selectSearchValue = yield call(makeSelectSearchValue);
  const searchValue = yield select(selectSearchValue);

  if (!searchValue.replace(/\s/g, '')) {
    yield put(searchResultsLoading(false));
    return;
  }

  const selectFilter = yield call(makeSelectFilter);
  const filter = yield select(selectFilter);

  const query = encodeFilterByName(filter) + searchValue;

  try {
    const response = yield call(fetch, `${API_URL}/?apikey=${API_KEY}&${query}`);
    if (!response.ok) {
      yield put(searchResultsError(response.statusText));
      return;
    }

    const data = yield response.json();
    yield put(searchResults(data));
    yield put(searchResultsLoading(false));
  } catch (error) {
    yield put(searchResultsError(error));
    yield put(searchResultsLoading(false));
  }
}

export default function* defaultSaga() {
  yield takeLatest(searchBarSubmitQuery, submitQuerySaga);
}
