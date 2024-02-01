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
        setStudents(({...student,[e.target.name]:e.target.value}))
       
    }
    const addstudent=()=>{
        console.log(student)
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
     <input type="text" placeholder="Enter FirstName" name='firstname' value={student.firstname} onChange={changehandler}/><br/>
     <input type="text" placeholder="Enter LastName" name='lastname'  value={student.lastname} onChange={changehandler}/><br/>
     <input type="email" placeholder="Enter Email" name='email' value={student.email} onChange={changehandler}/><br/>
     <input type="text" placeholder="Enter Gender" name='gender' value={student.gender} onChange={changehandler}/><br/>
     <input type="number" placeholder="Enter Contact" name='contact' value={student.contact} onChange={changehandler}/><br/>
     <button onClick={()=>{addstudent()}}>Add Student</button>
     </form>
    </div>
  )
}

export default Table