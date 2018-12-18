import { createSelector } from 'reselect';

const selectSearchResultsDomain = state => state.searchResults;

const makeSelectLoadingState = () => createSelector(
  selectSearchResultsDomain,
  state => state.get('loading')
);

const makeSelectErrorState = () => createSelector(
  selectSearchResultsDomain,
  state => state.get('error')
);

const makeSelectSearchResults = () => createSelector(
  selectSearchResultsDomain,
  state => state.get('results')
);

export {
  makeSelectLoadingState,
  makeSelectErrorState,
  makeSelectSearchResults,
}
