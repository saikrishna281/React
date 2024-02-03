import React, { useState } from 'react'
import {useFormik} from 'formik'
import { YupValidation } from './YupValidatiom'
function Validation() {
    const [data,setdata]=useState([])
     const {handleChange,handleSubmit,handleBlur,errors}= useFormik({
           initialValues:{
            name:'',
            email:'',
            password:'',
            confirmpassword:''
           },
           validationSchema:YupValidation,
           onSubmit:(values)=>{
               setdata([...data,values])
           }
      })
  return (
    <div >
        <h1>Registration Form</h1>
         <div className='container'>
        <form onSubmit={handleSubmit}>
             <input 
             type="text"
             placeholder='Enter Name'
             name='name' 
             onBlur={handleBlur}
             onChange={handleChange}
             />
             <br/>
            {errors.name && <small >{errors.name}</small>}
             <input 
             type="email"
             placeholder='Enter Email'
             name='email' 
             onBlur={handleBlur}
             onChange={handleChange}
             />
             <br/>
             {errors.email && <small>{errors.email}</small>}
             <input 
             type="password"
             placeholder='Enter password'
             name='password' 
             onBlur={handleBlur}
             onChange={handleChange}
             />
             <br/>
             {errors.password && <small>{errors.password}</small>}
             <input 
             type="password"
             placeholder='Enter confirmPassword'
             name='confirmpassword' 
             onBlur={handleBlur}
             onChange={handleChange}
             />
             <br/>
             {errors.confirmpassword && <small>{errors.confirmpassword}</small>}
             <button>Submit</button>
        </form>
        </div>
        <div>
        {
            <ul>
                {
                    data.map((student)=>{
                        return(
                            <div>
                                <li>{student.name}</li>
                                <li>{student.email}</li>
                            </div>
                        )
                    })
                }
            </ul>
        }
        </div>
    </div>
  )
}

export default Validation