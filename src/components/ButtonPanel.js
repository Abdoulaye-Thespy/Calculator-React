import React from 'react';

import './ButtonPanel.css';

import PropTypes from 'prop-types';

import Button from './Button';

const ButtonPanel = ({ clickHandler }) => (
  <>
    <div className="line1">
      <Button name="AC" clickHandler={this.clickHandler}/>
      <Button name="+/-" clickHandler={this.clickHandler}/>
      <Button name="%" clickHandler={this.clickHandler}/>
      <Button name="÷" clickHandler={this.clickHandler}/>
    </div>
    <div className="line1">
      <Button name="7" clickHandler={this.clickHandler}/>
      <Button name="8" clickHandler={this.clickHandler}/>
      <Button name="9" clickHandler={this.clickHandler}/>
      <Button name="X" clickHandler={this.clickHandler}/>
    </div>
    <div className="line1">
      <Button name="4" clickHandler={this.clickHandler}/>
      <Button name="5" clickHandler={this.clickHandler}/>
      <Button name="6" clickHandler={this.clickHandler}/>
      <Button name="-" clickHandler={this.clickHandler}/>
    </div>
    <div className="line1">
      <Button name="1" clickHandler={this.clickHandler}/>
      <Button name="2" clickHandler={this.clickHandler}/>
      <Button name="3" clickHandler={this.clickHandler}/>
      <Button name="+" clickHandler={this.clickHandler}/>
    </div>
    <div className="line1">
      <Button name="5" clickHandler={this.clickHandler}/>
      <Button name="." clickHandler={this.clickHandler}/>
      <Button name="=" clickHandler={this.clickHandler}/>
      <Button name="" clickHandler={this.clickHandler}/>
    </div>
  </>
);

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
export default ButtonPanel;
