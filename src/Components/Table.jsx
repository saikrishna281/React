import React, { useState } from 'react'

function Table() {
    const [student, setStudents] = useState([
        {
            firname: '',
            lastname: '',
            email: '',
            gender: '',
            contact: ''
        }
    ])
    [{firname,lastname,email,gender,contact}]=newdata;
    const [data, setData] = useState([])
    const handlesubmit = e => {
        e.preventDefault()
    }
    const changehandler = e => {
        setStudents(({ ...student, [e.target.name]: e.target.value }))

    }
    const addstudent = () => {
        setData([...data, student])
        setData(newdata)
    }
    return (
        <div>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="Enter FirstName" name='firstname' value={student.firstname} onChange={changehandler} /><br />
                <input type="text" placeholder="Enter LastName" name='lastname' value={student.lastname} onChange={changehandler} /><br />
                <input type="email" placeholder="Enter Email" name='email' value={student.email} onChange={changehandler} /><br />
                <input type="text" placeholder="Enter Gender" name='gender' value={student.gender} onChange={changehandler} /><br />
                <input type="number" placeholder="Enter Contact" name='contact' value={student.contact} onChange={changehandler} /><br />
                <button onClick={() => { addstudent() }}>Add Student</button>
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
                        data.map((stu) => {
                            return (
                                <tr>
                                    <td>{stu.firstname}</td>
                                    <td>{stu.lastname}</td>
                                    <td>{stu.email}</td>
                                    <td>{stu.gender}</td>
                                    <td>{stu.contact}</td>
                                    <td>
                                        <button>Edit</button>
                                        <button>Delete</button>
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