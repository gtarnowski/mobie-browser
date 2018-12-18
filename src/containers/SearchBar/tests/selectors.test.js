import { fromJS } from 'immutable';

import { makeSelectFilter, makeSelectSearchValue, selectSearchBarDomain } from '../selectors';

describe('SearchBar selectors', () => {
  it('should select selectSearchBarDomain state', () => {
    const state = fromJS({
      filter: '',
      searchValue: '',
    });
    expect(selectSearchBarDomain({ searchBar: {} })).toEqual({});
  });
    it('should return ', () => {
        
    });
});
