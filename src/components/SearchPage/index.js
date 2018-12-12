import React, { Component } from 'react';

// Components
import SearchBar from '../SearchBar';
import QueryProvider from '../QueryProvider';
import SearchResults from '../SearchResults';
import { encodeFilterByName } from '../../utils/filtersEncode';
import './index.css';

class SearchPage extends Component {
  state = {
    query: '',
    filter: 'title',
    searchValue: '',
  };

  onCheck = filterName => this.setState({ filter: filterName });

  onChange = ({ target: { value: searchValue } }) => this.setState({ searchValue });

  onSubmit = e => {
    e.preventDefault();
    const { filter, searchValue } = this.state;
    if (!searchValue.replace(/\s/g, '')) return;

    const filterPrefix = encodeFilterByName(filter);
    const query = filterPrefix + searchValue;
    this.setState({ query });
  };

  render() {
    const { query, filter, searchValue } = this.state;
    return (
      <div className="SearchPage">
        <SearchBar
          onSubmit={this.onSubmit}
          onCheck={this.onCheck}
          filter={filter}
          searchValue={searchValue}
          onChange={this.onChange}
        />
        {query && (
          <QueryProvider query={query}>
            <SearchResults />
          </QueryProvider>
        )}
      </div>
    );
  }
}

export default SearchPage;
