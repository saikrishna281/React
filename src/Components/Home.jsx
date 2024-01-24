import React from 'react'
import { auth } from './firebase'

function Home(presentUser) {
  return (
    <div>
        <h1>Welcome to HomePage {presentUser.email}</h1>
        <button onClick={()=>auth.signOut()}>Sign Out</button>
    </div>
  )
}

export default Home