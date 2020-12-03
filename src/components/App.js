import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
/* eslint-disable */
import calculate from '../logic/calculate';
 /* eslint-enable */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  handleClick(ButtonName) {
    const result = calculate(this.state, ButtonName);
    const { totals, nexts, operations } = result;
    this.setState({
      total: totals,
      next: nexts,
      operation: operations,
    });
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <Display next={total} />
        <ButtonPanel onClick={this.handleClick} />
      </>
    );
  }
}

export default App;
