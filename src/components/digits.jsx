import React from 'react';
import PropTypes from 'prop-types';

import Button from './partials/button';

const Digits = ({ onClick }) => (
  <div className="digit-area">
    {
      [...Array(10).keys()].map(
        i => <Button key={`dig_${i}`} onClick={onClick} value={i} />,
      )
    }
  </div>
);

Digits.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Digits;
