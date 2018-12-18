import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectSearchBarDomain = state => fromJS(state.searchBar);

const makeSelectFilter = () => createSelector(
  selectSearchBarDomain,
  state => state && state.get('filter')
);

const makeSelectSearchValue = () => createSelector(
  selectSearchBarDomain,
  state => state && state.get('searchValue')
);

export {
  selectSearchBarDomain,
  makeSelectFilter,
  makeSelectSearchValue,
}
