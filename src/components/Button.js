import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandle, color }) => (
  <button
    className="btn"
    type="button"
    onClick={() => {
				clickHandle(name); // eslint-disable-line
    }}
  >
    {name}
  </button>

);

Button.defaultProps = {
  name: 'C',
  color: 'orange',
};

Button.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  clickHandle: PropTypes.func.isRequired,
};

export default Button;
