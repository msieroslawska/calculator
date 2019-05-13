import React from 'react';

import Operator from './partials/operator';

const Operators = ({ onClick }) => (
  ['+', '-', '*', '/'].map(
    v => <Operator key={`op_${v}`} onClick={onClick} value={v} />,
  )
);

export default Operators;
