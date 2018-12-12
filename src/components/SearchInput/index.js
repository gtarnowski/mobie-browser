import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const SearchInput = ({ searchValue, onChange }) => (
  <input className="SearchInput" placeholder="Search for a movie" type="text" value={searchValue} onChange={onChange} />
);

SearchInput.propTypes = {
  searchValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default SearchInput;
