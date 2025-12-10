1. State.jsx
import { useState } from "react";
export default function MyButton() {
    const[count,setCount]=useState(0);

    function handleClick()
        {
        setCount(count+1);
    }

    return <>
    <h1>This is State Example</h1>
     <button onClick={handleClick}   
     style={{ 
    backgroundColor: "#e0e006d6", 
    borderRadius: "10px",
    padding: "10px 20px",
    color: "#f50c0caa",
    border: "none",
    cursor: "pointer"
  }}> 
          Clicked {count} times
        </button>
    </>
       
       
    
}
 2. App.jsx

import MyButton from "./core concepts/helloworld/State";

export default function Myapp() {
 
  return <MyButton/>
}
