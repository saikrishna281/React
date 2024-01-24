import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

function Registration() {
  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
  });

  const { firstname, lastname, email, password } = data;

  const submiHandler = (e) => {
    e.preventDefault();
    // Add your logic for form submission or validation here
  };

  const signup = () => {
    
    createUserWithEmailAndPassword(auth, email, password)
  }

  const signin = () => {
    signInWithEmailAndPassword(auth, email, password)
      
  };

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={submiHandler}>
        <input
          type="text"
          name="firstname"
          placeholder="Enter FirstName"
          value={firstname}
          onChange={changeHandler}
        /><br/>
        <input
          type="text"
          name="lastname"
          placeholder="Enter LastName"
          value={lastname}
          onChange={changeHandler}
        /><br/>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={email}
          onChange={changeHandler}
        /><br/>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={changeHandler}
        /><br/>
        <button type="button" onClick={signup}>Sign Up</button>&nbsp; &nbsp;
        <button type="button" onClick={signin}>Sign In</button>
      </form>
    </div>
  );
}

export default Registration;
