import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandle }) => (
  <button type="button" onClick={clickHandle}>
    {name}
  </button>

);

Button.defaultProps = {
  name: 'C',
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandle: PropTypes.func.isRequired,
};

export default Button;
