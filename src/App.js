
import { useState } from 'react';
import './App.css';
import First from './Components/First';
import MyContext  from './Components/Context';
function App() {

  const [x,setX]=useState(10)
  return (
    <MyContext.Provider value={x}>
    <div className="App">
     <First x={x}/>
    </div>
    </MyContext.Provider>
  );
}

export default App;
