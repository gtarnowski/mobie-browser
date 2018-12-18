import { fromJS } from 'immutable';

import { makeSelectFilter, makeSelectSearchValue, selectSearchBarDomain } from '../selectors';

describe('SearchBar selectors', () => {
  describe('searchBarDomain', () => {
    it('should select selectSearchBarDomain state', () => {
      expect(selectSearchBarDomain({ searchBar: {} })).toEqual(fromJS({}));
    });
  });

  describe('filter', () => {
    const selectFilter = makeSelectFilter();

    it('should return undefined when state is empty ', () => {
      const state = fromJS({
        searchBar: {},
      });
      expect(selectFilter(state)).toBeUndefined();
    });

    it('should return filter value', () => {
      const state = {
        searchBar: {
          filter: 'title',
        },
      };
      expect(selectFilter(state)).toEqual('title');
    });
  });

  describe('searchValue', () => {
    const selectSearchValue = makeSelectSearchValue();

    it('should return undefined when state is empty ', () => {
      const state = fromJS({
        searchBar: {},
      });
      expect(selectSearchValue(state)).toBeUndefined();
    });

    it('should return searchValue value', () => {
      const state = {
        searchBar: {
          searchValue: 'Star Wars',
        },
      };
      expect(selectSearchValue(state)).toEqual('Star Wars');
    });
  });
});
