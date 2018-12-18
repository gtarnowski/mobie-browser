import { fromJS } from 'immutable';
import { createReducer } from 'redux-act';
import { searchBarFilter, searchBarValue } from './actions';

export const initialState = fromJS({
  filter: 'title',
  searchValue: '123123',
});

export const methods = {
  [searchBarFilter]: (state, payload) => state
    .set('filter', payload),
  [searchBarValue]: (state, { target: { value } }) => state
    .set('searchValue', value),
};

export default createReducer(methods, initialState);
