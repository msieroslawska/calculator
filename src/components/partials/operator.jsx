import React from 'react';
import PropTypes from 'prop-types';

import Button from './button';

const Operator = ({ onClick, value }) => (
  <Button
    buttonType="operator"
    onClick={onClick}
    value={value}
  />
);

Operator.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Operator;
