import React from 'react';
import PropTypes from 'prop-types';

const Result = ({ value }) => (
  <div className="result">
    {value.toString()}
  </div>
);

Result.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Result;
