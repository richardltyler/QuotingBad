import React from 'react';
import PropTypes from 'prop-types';
import './Error.css';

const Error = ({ error }) => {
  return (
    <h2>{error}</h2>
  )
}

export default Error;

Error.propTypes = {
  error: PropTypes.string.isRequired,
}