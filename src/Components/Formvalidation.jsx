import React, { useState } from 'react'
function Formvalidation() {
  const [array,setArray]=useState([])
  const [index,setIndex]=useState()
  const [isflag,setIsflag]=useState(false)
  const [inputdata,setInputdata]=useState([
    {
      name:'',
      email:'',
      contact:'',
      location:''
    }
  ])
  let {name,email,contact,location}=inputdata;
  const handlesubmit=(e)=>{
    e.preventDefault()
  }
  const handlechange=(e)=>{
    setInputdata({...inputdata,[e.target.name]:e.target.value})
  }

  const adddata=()=>{
   setArray([...array,{name,email,contact,location}])
    setInputdata({
      name:'',
      email:'',
      contact:'',
      location:''
    })
  }
  function deletebtn(i){
   const newdata=[...array];
   newdata.splice(i,1);
   setArray(newdata)
  }
  function editing(i){
  const {name,email,contact,location}=array[i];
  setInputdata({name,email,contact,location})
  setIsflag(true)
  setIndex(i)
  }
  function updateinfo(i){
const total=[...array];
total.splice(index,1,{name,email,contact,location})
setArray(total);
setIsflag(false);
setInputdata({
  name:'',
  email:'',
  contact:'',
  location:''
})
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
      <input type="text" name='name' value={inputdata.name} onChange={handlechange}/><br/>
      <input type="email" name='email' value={inputdata.email} onChange={handlechange}/><br/>
      <input type="number" name='contact' value={inputdata.contact} onChange={handlechange}/><br/>
      <input type="text" name='location' value={inputdata.location} onChange={handlechange}/><br/>
      <button onClick={()=>!isflag ?adddata():updateinfo()}>{!isflag ? `Add data`:`Update data`}</button>
      </form>
      <table>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Location</th>
          <th>Edit</th>
          <th>Delete</th>
        </thead>
          <tbody>
            {
             array.map((item,i)=>{
                return(
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td>{item.location}</td>
                    <td><button onClick={()=>{editing(i)}}>Edit</button></td>
                    <td><button onClick={()=>{deletebtn(i)}}>Delete</button></td>
                  </tr>
                )
              })
            }
          </tbody>
      </table>
    </div>
  )
}

export default Formvalidation