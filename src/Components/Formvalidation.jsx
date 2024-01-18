import React, { useState } from 'react';

const FormValidation = () => {
  const [data, setData] = useState({
    fullname: '',
    email: '',
    contact: '',
    location: ''
  });
  const [student,setStudent]=useState([])

  const handlesubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const handlechange = (e) => {
    setData({...data,[e.target.name]: e.target.value});
  };

  const addemp = () => {
    setStudent([...student,data]);
  };
   function deletebtn(i){
    const temp=[...student];
    temp.splice(i,1);
   }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="FullName"
          name="fullname"
          value={data.fullname}
          onChange={handlechange}
        /><br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={handlechange}
        /><br />
        <input
          type="tel"
          placeholder="Contact"
          name="contact"
          value={data.contact}
          onChange={handlechange}
        /><br />
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={data.location}
          onChange={handlechange}
        /><br />
        <button onClick={addemp}>Submit</button>
      </form>
      <table >
        <thead>
            <th>Fullname</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Location</th>
            <th>Remove</th>
        </thead>
        <tbody>
            {student.map((s,i)=>{
             return(
                <tr>
                <td>{s.fullname}</td>
                <td>{s.email}</td>
                <td>{s.contact}</td>
                <td>{s.location}</td>
                 <td>
                    <button>Edit</button>
                    <button onClick={()=>{deletebtn(i)}}>Delete</button>
                 </td>
                
                </tr>
                
             )
            })
                
            }
        </tbody>
      </table>
    </div>
  );
};

export default FormValidation;
