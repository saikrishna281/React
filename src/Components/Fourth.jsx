
import { useContext } from 'react'
import MyContext from './Context'
function Fourth() {
  var y=useContext(MyContext)
  return (
    <div className='App'>
      <h1>Fourth</h1>
      <h3>x::{y}</h3>
    </div>
  )
}

export default Fourth