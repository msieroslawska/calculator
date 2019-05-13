import React from 'react';
import PropTypes from 'prop-types';

import Button from './partials/button';

const Sum = ({ onClick }) => (
  <Button
    buttonType="operator"
    onClick={onClick}
    value="="
  />
);

Sum.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Sum;
