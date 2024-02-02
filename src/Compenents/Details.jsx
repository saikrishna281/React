import React, { useState } from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });
function Details() {
    const [data,setData]=useState([])
   const {handleSubmit,handleBlur,handleChange}= useFormik({
        initialValues:{
            firstname:'',
            lastname:'',
            email:''
        },
        onSubmit:(values)=>{
         setData([...data,values])
         
        },
        validationSchema:{SignupSchema}
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
                {}
                <input
                    type="text"
                    name='lastname'
                    onChange={handleChange}
                    onBlur={handleBlur}
                   
                />
                <br />
                <input
                    type="text"
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    
                />
                <br />
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