import { useState } from "react";
import './name.css';

function Message ({nameValue}: {nameValue: string}) {
    if (nameValue == 'Pedrito') {
        return <h2 className="special-name">You have the best name ever!</h2>  
    } else{
        return <h1>Your Name is <span className="name">{nameValue}</span></h1>
    }
}

export default function Name() {
    const [name, setName] = useState("Dont write Pedrito!");
    
  return (
    <div className="name-container">
        <div className="form">
            <input 
                type="text" 
                placeholder="Enter your name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
            />
        </div>
        <Message nameValue={name} />
    </div>
  )
}