import React from 'react';

import './ButtonPanel.css';

import PropTypes from 'prop-types';

import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <>
    <div className="line1">
      <Button name="AC" clickHandle={clickHandler} />
      <Button name="+/-" clickHandle={clickHandler} />
      <Button name="%" clickHandle={clickHandler} />
      <Button name="÷" clickHandle={clickHandler} />
    </div>
    <div className="line1">
      <Button name="7" clickHandle={clickHandler} />
      <Button name="8" clickHandle={clickHandler} />
      <Button name="9" clickHandle={clickHandler} />
      <Button name="X" clickHandle={clickHandler} />
    </div>
    <div className="line1">
      <Button name="4" clickHandle={clickHandler} />
      <Button name="5" clickHandle={clickHandler} />
      <Button name="6" clickHandle={clickHandler} />
      <Button name="-" clickHandle={clickHandler} />
    </div>
    <div className="line1">
      <Button name="1" clickHandle={clickHandler} />
      <Button name="2" clickHandle={clickHandler} />
      <Button name="3" clickHandle={clickHandler} />
      <Button name="+" clickHandle={clickHandler} />
    </div>
    <div className="line1">
      <Button name="5" clickHandle={clickHandler} />
      <Button name="." clickHandle={clickHandler} />
      <Button name="=" clickHandle={clickHandler} />
    </div>
  </>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
export default ButtonPanel;
