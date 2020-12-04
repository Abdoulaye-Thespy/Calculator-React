import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(ButtonName) {
    const data = calculate(this.state, ButtonName);
    const { totals, nexts, operations } = data;
    this.setState({
      total: totals,
      next: nexts,
      operation: operations,
    });
    console.log('hello');
  }

  render() {
    /* eslint-disable */ 
    const { total, next, operation } = this.state;
    const result = next || total || '0';
 /* eslint-enable */
    return (
      <div>

        <>
          <Display total={result.toString()} />
          <ButtonPanel clickHandler={this.handleClick} />
        </>
      </div>
    );
  }
}

export default App;
