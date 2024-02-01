import React, { useState } from 'react'

function Table() {
    const [student, setStudents] = useState([
        {
            firstname: '',
            lastname: '',
            email: '',
            gender: '',
            contact: ''
        }
    ])

    const [data, setData] = useState([])
    const  [IsFlag,setIsFlag]=useState(false)
    const [index,setIndex]=useState()
    const handlesubmit = e => {
        e.preventDefault()
    }
    const changehandler = e => {
        setStudents(({ ...student, [e.target.name]: e.target.value }))

    }
    function addstudent(){
        setData([...data, student])
         setStudents({
            firstname: '',
            lastname: '',
            email: '',
            gender: '',
            contact: ''
         })
    }

    const deletebtn=(i)=>{
        const deleteitem=[...data];
        deleteitem.splice(i,1);
        setData(deleteitem)
    }

    const editing=(i)=>{
    const {firstname,lastname,email,gender,contact}=data[i];
    console.log(data[i])
    setStudents({firstname,lastname,email,gender,contact});
    setIsFlag(true)
    setIndex(i)
    }
    
    function updatedata(){
    const total=[...data];
    total.splice(index,1,student);
      setData(total);
      setIsFlag(false);
      setStudents({
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        contact: ''
     })

    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="Enter FirstName" name='firstname' value={student.firstname} onChange={changehandler} /><br />
                <input type="text" placeholder="Enter LastName" name='lastname' value={student.lastname} onChange={changehandler} /><br />
                <input type="email" placeholder="Enter Email" name='email' value={student.email} onChange={changehandler} /><br />
                <input type="text" placeholder="Enter Gender" name='gender' value={student.gender} onChange={changehandler} /><br />
                <input type="number" placeholder="Enter Contact" name='contact' value={student.contact} onChange={changehandler} /><br />
                <button onClick={()=> !IsFlag ? addstudent():updatedata()}>{IsFlag ? "Update":"AddStudent"}</button>
            </form>
            <table>
                <thead>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Contact</th>
                    <th>Remove</th>
                </thead>
                <tbody>
                    {
                        data.map((stu,i) => {
                            return (
                                <tr>
                                    <td>{stu.firstname}</td>
                                    <td>{stu.lastname}</td>
                                    <td>{stu.email}</td>
                                    <td>{stu.gender}</td>
                                    <td>{stu.contact}</td>
                                    <td>
                                        <button onClick={()=>{editing(i)}}>Edit</button>
                                        <button onClick={()=>{deletebtn(i)}}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table