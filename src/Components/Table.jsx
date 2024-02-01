import React, { useState } from 'react'

function Table() {
    const [student,setStudents]=useState([
        {
            firname:'',
            lastname:'',
            email:'',
            gender:'',
            contact:''
        }
    ])
    const handlesubmit=e=>{
        e.preventDefault()
    }
    const changehandler=e=>{
        setStudents({[...student,e.target.name]:e.target.name})
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
     <input type="text" placeholder="Enter FirstName" name='firstname' onChange={changehandler}/><br/>
     <input type="text" placeholder="Enter LastName" name='lastname'/><br/>
     <input type="email" placeholder="Enter Email" name='email'/><br/>
     <input type="text" placeholder="Enter Gender" name='gender'/><br/>
     <input type="number" placeholder="Enter Contact" name='contact'/><br/>
     <button>Add Student</button>
     </form>
    </div>
  )
}

export default Table