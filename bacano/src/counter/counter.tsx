import { useState, useEffect } from "react";
import './counter.css'

function Counter (){
    const [counter, setCounter] = useState(0)
    localStorage.setItem('time', String(counter))

    useEffect(() => {
        const timer = Number(localStorage.getItem('time')!);
        document.title = String(timer);
        setInterval(() => {
            setCounter(timer + 1)
            localStorage.setItem('time', String(counter))
        }, 1000)
    }, [counter])


    function clear(){
        setCounter(0)
        localStorage.removeItem('item')
    }

    return(
        <div>
            <h1>Im a timer</h1>
            <p>{counter}</p>
            <button onClick={clear}>Clear timer</button>
        </div>
    )
}

export default Counter;