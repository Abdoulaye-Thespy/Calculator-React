import React from 'react';

import './ButtonPanel.css';

import Button from './Button';

const ButtonPanel = () => (
  <>
    <div className="line1">
      <Button name="AC" />
      <Button name="+/-" />
      <Button name="%" />
      <Button name="÷" />
    </div>
    <div className="line1">
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" />
    </div>
    <div className="line1">
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="-" />
    </div>
    <div className="line1">
      <Button name="1" />
      <Button name="2" />
      <Button name="3" />
      <Button name="+" />
    </div>
    <div className="line1">
      <Button name="5" />
      <Button name="." />
      <Button name="=" />
      <Button name="" />
    </div>
  </>
);

export default ButtonPanel;
