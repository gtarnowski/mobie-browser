import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { RADIO_FILTERS } from '../../constants';
import { searchBarValue, searchBarFilter, searchBarSubmitQuery } from './actions';

import SearchInput from '../../components/SearchInput';
import './index.css';
import { makeSelectFilter, makeSelectSearchValue } from './selectors';

export const SearchBar = ({ onChange, onSubmit, onCheck, searchValue, filter }) => {
  const onOverrideSubmit = e => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="SearchBar">
      <form onSubmit={onOverrideSubmit}>
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

const mapStateToProps = createStructuredSelector({
  searchValue: makeSelectSearchValue(),
  filter: makeSelectFilter(),
});

export const mapDispatchToProps = dispatch => ({
  onChange: inputValue => dispatch(searchBarValue(inputValue)),
  onCheck: radioFilterValue => dispatch(searchBarFilter(radioFilterValue)),
  onSubmit: () => dispatch(searchBarSubmitQuery()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SearchBar);
