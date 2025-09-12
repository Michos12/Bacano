import { useState }from "react";
import './home.css';

function Home (){
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <div className="title">
        <h1>In this project u are gonna see a bunch of excersice with React</h1>
        <h1>I hope u like it! </h1>
      </div>
      <div className="box">
          <h1 className="text">The number is: {number}</h1>
          <button onClick={increment} className="increment-button">Increment</button>
          <button onClick={decrement} className="decrement-button">Decrement</button>
      </div>
    </div>
  );
}

export default Home;
