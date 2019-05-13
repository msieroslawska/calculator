import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

const Digit = ({ onClick, value }) => (
  <Button
    buttonType="digit"
    onClick={onClick}
    value={value}
  />
);

Digit.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default Digit;
