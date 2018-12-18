import { createSelector } from 'reselect';

const selectSearchBarDomain = state => state.searchBar;

const makeSelectFilter = () => createSelector(
  selectSearchBarDomain,
  state => state.get('filter')
);

const makeSelectSearchValue = () => createSelector(
  selectSearchBarDomain,
  state => state.get('searchValue')
);

export {
  makeSelectFilter,
  makeSelectSearchValue,
}
