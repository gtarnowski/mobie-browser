import { createAction } from 'redux-act';

export const searchResults = createAction('SEARCH_RESULTS');
export const searchResultsError = createAction('SEARCH_RESULTS_ERROR');
export const searchResultsLoading = createAction('SEARCH_RESULTS_LOADING');
