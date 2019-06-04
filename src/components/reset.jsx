import React from 'react';
import PropTypes from 'prop-types';

import Button from './partials/button';

const Reset = ({ onClick }) => (
  <Button
    onClick={onClick}
    value="RESET"
  />
);

Reset.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Reset;
