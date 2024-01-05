import React, { useContext } from 'react'
import Fourth from './Fourth'
import MyContext from './Context'
    
function Third() {
  const y= useContext(MyContext)
  return (
    <div className='App'>
      <h1>Third</h1>
      <h3>x::{y}</h3>
      <Fourth/>
    </div>
  )
}

export default Third