import { fromJS } from 'immutable';
import reducer from '../reducers';
import { searchBarFilter, searchBarValue } from '../actions';

describe('SearchBar reducers', () => {
  const initialState = fromJS({
    filter: 'title',
    searchValue: '',
  });

  describe('initial state', () => {
    it('should return initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState);
    });
  });

  describe('filter', () => {
    it('should set filter by "all" value', () => {
      const filter = 'all';
      const state = reducer(initialState, searchBarFilter(filter));
      expect(state.get('filter')).toEqual('all');
    });
  });

  describe('searchValue', () => {
    it('should set "searchValue" by "Star Wars" value', () => {
      const searchValue = { target: { value: 'Star Wars' } };
      const state = reducer(initialState, searchBarValue(searchValue));
      expect(state.get('searchValue')).toEqual('Star Wars');
    });
  });
});
