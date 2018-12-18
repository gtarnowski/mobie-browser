import { createAction } from 'redux-act';

export const searchBarValue = createAction('SEARCH_BAR_VALUE');
export const searchBarFilter = createAction('SEARCH_BAR_FILTER');
export const searchBarSubmitQuery = createAction('SEARCH_PAGE_SUBMIT_QUERY');
