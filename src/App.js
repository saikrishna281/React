
import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from './Components/Headers'
function App() {
  return (
    <div>
      <Headers/>
          <Outlet></Outlet>
    </div>
  )
}

export default App
