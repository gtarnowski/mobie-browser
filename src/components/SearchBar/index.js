import React from 'react';
import PropTypes from 'prop-types';
import SearchInput from '../SearchInput';
import { RADIO_FILTERS } from '../../constants';
import './index.css';

const SearchBar = ({ onChange, onSubmit, onCheck, searchValue, filter }) => {
  return (
    <div className="SearchBar">
      <form onSubmit={onSubmit}>
        <SearchInput searchValue={searchValue} onChange={onChange} />
        <div>
          <button type="submit">Search</button>
        </div>
        {RADIO_FILTERS.map(filterName => (
          <div key={filterName} className="SearchRadio">
            <input
              id={filterName}
              type="radio"
              checked={filter === filterName.toLowerCase()}
              name="filter"
              onChange={() => onCheck(filterName.toLowerCase())}
            />
            <label id={`${filterName}-radio`} htmlFor={filterName}>
              {filterName}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onCheck: PropTypes.func,
  searchValue: PropTypes.string,
  filter: PropTypes.string,
};

export default SearchBar;
