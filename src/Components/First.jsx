import React from 'react'
import Secon from './Secon'

function First(props) {
  return (
    <div className='App'>
        <h1>First</h1>
        <h2>x::{props.x}</h2>
         <Secon/>
    </div>
  )
}

export default First