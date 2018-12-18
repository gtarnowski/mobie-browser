import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectSearchResultsDomain = state => fromJS(state.searchResults);

const makeSelectLoadingState = () =>
  createSelector(
    selectSearchResultsDomain,
    state => state && state.get('loading'),
  );

const makeSelectErrorState = () =>
  createSelector(
    selectSearchResultsDomain,
    state => state && state.get('error'),
  );

const makeSelectSearchResults = () =>
  createSelector(
    selectSearchResultsDomain,
    state => state && state.get('results')
  );

export { makeSelectLoadingState, makeSelectErrorState, makeSelectSearchResults };
