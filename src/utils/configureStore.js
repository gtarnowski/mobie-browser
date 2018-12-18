import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

// Reducers
import searchBar from '../containers/SearchBar/reducers';
import searchResults from '../containers/SearchResults/reducers'

// Sagas
import searchBarSagas from '../containers/SearchBar/saga';

const combinedReducers = combineReducers({
  searchBar,
  searchResults,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  combinedReducers,
  compose(
    applyMiddleware(sagaMiddleware),
    // If you are using the devToolsExtension, you can add it here also
    typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);

sagaMiddleware.run(searchBarSagas);
