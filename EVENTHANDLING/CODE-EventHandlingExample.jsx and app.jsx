EventHandlingExample
import {useState,usestate} from "react";
export default function EventHandlingExample(){
    const [message,setMessage]=useState("");

const handleChange=(event)=> {
    setMessage(event.target.value)
}
return<>
<h1>Event Handling example </h1>
<input type ="text" onChange={handleChange} placeholder="Enter Message" />
<p>{message}</p>
</>
}


APP.JSX
import EventHandlingExample from "./core concepts/event/EventHandlingexample"
export default function App(){
  return <EventHandlingExample/>
}
