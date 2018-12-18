/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import get from 'lodash/get';

import ListingItem from '../../components/ListingItem';
import ErrorField from '../../components/ErrorField';
import Loader from '../../components/Loader';
import { makeSelectErrorState, makeSelectLoadingState, makeSelectSearchResults } from './selectors';
import './index.css';

const SearchResults = ({ loading, error, results }) => {
  const items = results.Search || [results];
  const resultError = error || get(results, 'Error');

  if (loading) return <Loader />;
  if (resultError) return <ErrorField error={resultError || 'Something get wrong'} />;

  return (
    <div className="SearchResults">
      {items &&
        items.length > 0 &&
        items.map(({ imdbID, Title, Poster, Type, Year }, key) => (
          <ListingItem key={key} title={Title} poster={Poster} imdbID={imdbID} year={Year} type={Type} />
        ))}
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoadingState(),
  error: makeSelectErrorState(),
  results: makeSelectSearchResults(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(SearchResults);
