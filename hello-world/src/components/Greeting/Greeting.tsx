import PropTypes from 'prop-types';
import './Greeting.css';

const Greeting = (props) => {

  return (
    <div>
      <p className="greeting_text"> Hello {props.name}. You are {props.age} years old. </p>
    </div>
  );
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};


export default Greeting;
