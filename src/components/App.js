import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
/* eslint-disable */
import calculate from '../logic/calculate';
 /* eslint-enable */

const App = function app() {
  return (
    <>
      <Display />
      <ButtonPanel />
    </>
  );
};

export default App;
