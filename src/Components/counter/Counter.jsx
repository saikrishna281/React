import React, { useState } from "react";

 const Counter=(props)=>{
    const [count,setCount]=useState(props.i)
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{setCount(count+props.c)}}>Increment</button>
            <button onClick={()=>{setCount(count-props.c)}}>Decrement</button>
        </div>
    )
 }
 export default Counter;
