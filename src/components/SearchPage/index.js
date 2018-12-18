import React, { Fragment } from 'react';
import SearchBar from '../../containers/SearchBar';
import SearchResults from '../../containers/SearchResults';
import './index.css';

const SearchPage = () => (
  <Fragment>
    <SearchBar />
    <SearchResults />
  </Fragment>
);

export default SearchPage;
