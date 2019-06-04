import React from 'react';

import Button from './partials/button';

const Operators = ({ onClick }) => (
  <div className="operators-area">
    {
      ['+', '-', '*', '/', '='].map(
        v => <Button key={`op_${v}`} onClick={onClick} value={v} />,
      )
    }
  </div>
);

export default Operators;
