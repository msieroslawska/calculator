import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ onClick, value }) => (
  <button
    onClick={() => onClick(value)}
    type="button"
  >
    {value}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

export default Button;
