import { useContext, useState }from "react";
import './home.css';
import UserContext from "../provider/context";

function Home (){
  const [number, setNumber] = useState(0);
  const increment = () => {
    setNumber(number + 1);
  };

  const decrement = () => {
    setNumber(number - 1);
  };

const {user, setUser} = useContext(UserContext)

  return (
    <div>
        <div className="box">
            <h1 className="text">The number is: {number}</h1>
            <button onClick={increment} className="increment-button">Increment</button>
            <button onClick={decrement} className="decrement-button">Decrement</button>
        </div>
        <div className="example">
          <h1>Hello Im {user.name} and I have { user.age }</h1>
        </div>
    </div>
  );
}

export default Home;
