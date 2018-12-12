/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import ListingItem from '../ListingItem';
import ErrorField from '../ErrorField';
import './index.css';

const SearchResults = ({ data }) => {
  const { Response, Error } = data;
  const items = data.Search || [data];
  if (Error || Response === 'false') return <ErrorField error={Error || 'Something get wrong'} />;

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
  data: PropTypes.any,
};

export default SearchResults;
