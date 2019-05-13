import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ buttonType, onClick, value }) => (
  <button
    className={buttonType}
    onClick={() => onClick(value)}
    type="button"
  >
    {value}
  </button>
);

Button.propTypes = {
  buttonType: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
};

Button.defaultProps = {
  buttonType: '',
};

export default Button;
