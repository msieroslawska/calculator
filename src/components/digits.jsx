import React from 'react';
import PropTypes from 'prop-types';

import Digit from './partials/digit';

const Digits = ({ onClick }) => (
  [...Array(10).keys()].map(
    i => <Digit key={`dig_${i}`} onClick={onClick} value={i} />,
  )
);

Digits.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Digits;
