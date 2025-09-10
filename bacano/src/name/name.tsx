import { useState } from "react";
import './name.css';
function Name() {
    const [name, setName] = useState("Pedrito");

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
      <h1>Your Name is <span className="name">{name}</span></h1>
    </div>
  )
}
export default Name;