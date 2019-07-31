import React from 'react';

import './button.css';

const Button = ({children, ...props}) => (
  <button {...props}>{children}</button>
);

export default Button;