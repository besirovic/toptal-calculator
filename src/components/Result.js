import React from 'react';
import PropTypes from 'prop-types';

import './result.css';

const Result = ({ value }) => (
  <div className="result">{value}</div>
);

Result.propTypes = {
  value: PropTypes.string.isRequired
};

export default Result;