import React, { forwardRef } from 'react'

var Address =forwardRef((props,refs)=>{
  return (
    <div>
        <input type="email" ref={refs}/>
    </div>
  )
  }
)

export default Address