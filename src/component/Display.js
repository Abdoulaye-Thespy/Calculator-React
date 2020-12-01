import PropTypes from 'prop-types';

class Display extends React.Component {
constructor(props) {
    super(props);
  }
    render() {

return (
  <div id="challenge-node"> 
   <h1>{this.props.result}</h1>
  </div>
)


  }
};

Display.defaultProps = {
  result: 0
}

Greeting.propTypes = {
  result: PropTypes.string
};