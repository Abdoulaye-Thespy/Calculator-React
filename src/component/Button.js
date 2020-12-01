import PropTypes from 'prop-types';

class Button extends React.Component {
constructor(props) {
    super(props);
  }
    render() {

return (
  <div id="challenge-node"> 
   <h1>{this.props.name}</h1>
  </div>
)


  }
};


Button.propTypes = {
  result: PropTypes.string
};