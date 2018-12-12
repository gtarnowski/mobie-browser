import React from 'react';
import PropTypes from 'prop-types';
import './index.css';
import fakePoster from './fake-poster.jpg';

const ListingItem = props => {
  const { title, poster, type, year, imdbID } = props;
  const posterImage = !poster || poster === 'N/A' ? fakePoster : poster;
  return (
    <div className="ListingItem">
      <div className="thumbnail">
        <img src={posterImage} alt={title} />
      </div>
      <div className="details">
        <h2 className="title">{title}</h2>
        <hr />
        <div className="year">{year}</div>
        <div className="imdbID">{imdbID}</div>
        <div className="type">{type}</div>
      </div>
    </div>
  );
};

ListingItem.propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
  type: PropTypes.string,
  year: PropTypes.string,
  imdbID: PropTypes.string,
};

export default ListingItem;
