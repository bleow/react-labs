import {useState} from "react";

const Greeting = (props) => {

  let [currentName, setCurrentName] = useState(props.name);

  const changeName = () => {
    setCurrentName("James");
  }

  return (
    <div>
      <p className="greeting_text"> Hello {currentName}. You are {props.age} years old. </p>
      <button onClick={changeName} >change my name</button>
    </div>
  );
}

export default Greeting;
