import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const ErrorField = ({ error }) => <div className="ErrorField">{error}</div>;

ErrorField.propTypes = {
  error: PropTypes.string,
};

export default ErrorField;
