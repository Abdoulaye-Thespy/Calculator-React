import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // total: null,
      // next: null,
      // operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
    });
    // Change code above this line
  }

  render() {
    return (
      <div>
        <>
          <Display />
          <ButtonPanel />
        </>
      </div>
    );
  }
}

export default App;
