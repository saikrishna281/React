import React, { useEffect, useRef } from "react";
import Address from "./Address";

const Todolist=()=>{
   var fistnameRef=useRef()
   var lastnameRef=useRef()
   var emailRef=useRef()
   useEffect(()=>{
    fistnameRef.current.focus()
   },[])
   
   function handleKeyup(e,nextRef){
    console.log(nextRef)
       if(e.key==="Enter"){
        nextRef.current.focus()
       }
 }
    return(
        <div>
            <input 
            type="text" 
            ref={fistnameRef} 
            onKeyUp={(e)=>handleKeyup(e,lastnameRef)}
            /><br/>
             <input 
            type="text" 
            ref={lastnameRef} 
            onKeyUp={(e)=>handleKeyup(e,emailRef)}
            /><br/>
            <Address ref={emailRef}/>
        </div>
    )
}
export default Todolist;