import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
      .min(4, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please Enter Your FirstName'),
    lastname: Yup.string()
      .min(4, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Please Enter Your LastName'),
    email: Yup.string().email('Invalid email').required('Please Enter Your Email'),
    password: Yup.string().required('Password is required'),
    confirmpassword: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match')
  });
function Details() {
    const [data,setData]=useState([])
   const {handleSubmit,handleBlur,handleChange,errors}= useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            confirmpassword:''
        },
        onSubmit:(values)=>{
         setData([...data,values])
         
        },
        validationSchema:SignupSchema
    })
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='firstname'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                />
                <br />
                {errors.firstname && <small >{errors.firstname}</small>}<br/>
                <input
                    type="text"
                    name='lastname'
                    onChange={handleChange}
                    onBlur={handleBlur}
                   
                />
                <br />
                {errors.lastname && <small >{errors.lastname}</small>}<br/>
                <input
                    type="text"
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                />
                <br />
                {errors.email && <small >{errors.email}</small>}<br/>
                <input
                    type="password"
                    name='password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                />
                <br />
                {errors.password && <small >{errors.password}</small>}<br/>
                <input
                    type="password"
                    name='confirmpassword'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                />
                <br />
                {errors.confirmpassword && <small >{errors.confirmpassword}</small>}<br/>
                <button>submit</button>
            </form>
            {
                data.map((emp)=>{
                    return(
                        <ul>
                            <li>{emp.firstname}</li>
                            <li>{emp.lastname}</li>
                            <li>{emp.email}</li>
                        </ul>
                    )
                })
            }
        </div>
    )
}

export default Details