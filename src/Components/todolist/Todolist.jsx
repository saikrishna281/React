import React, { useState } from "react";

const Todolist=()=>{
    const [todo,setTodo]=useState([
        "Buy Car",
        "Buy Bike"
    ])
      const addtodo=()=>{
        const newtodo=document.getElementById('d1').value;
        const nt=[...todo,newtodo]
        setTodo(nt)
      }
      const deletebtn=(i)=>{
        const temp=[...todo];
         temp.splice(i,1);
         setTodo(temp)
      }
    return(
        <div className="App">
            <input type="text" id="d1"/>
            <button onClick={()=>{addtodo()}}>Add Todo</button>
            {
                  todo.map((t,i)=>{
                    return(
                        <li>
                            {t}
                            <button onClick={()=>{deletebtn(i)}}>Delete</button>
                        </li>
                    )
                })
            }
        </div>
    )
}
export default Todolist;