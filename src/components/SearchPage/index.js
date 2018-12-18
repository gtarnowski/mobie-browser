import React from 'react';
import SearchBar from '../../containers/SearchBar';
import SearchResults from '../../containers/SearchResults';
import './index.css';

const SearchPage = () => (
  <div className="SearchPage">
    <SearchBar />
    <SearchResults />
  </div>
);

export default SearchPage;
