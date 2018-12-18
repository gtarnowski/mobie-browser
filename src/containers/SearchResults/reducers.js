import { fromJS } from 'immutable';
import { createReducer } from 'redux-act';
import { searchResults, searchResultsError, searchResultsLoading } from './actions';

export const initialState = fromJS({
  results: [],
  loading: false,
  error: null,
});

export const methods = {
  [searchResults]: (state, payload) => state
    .set('results', payload),
  [searchResultsError]: (state, payload) => state
    .set('error', payload),
  [searchResultsLoading]: (state, payload) => state
    .set('loading', payload),
};

export default createReducer(methods, initialState)
