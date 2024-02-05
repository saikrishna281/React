// import React, { useState } from 'react'

// function App() {
//   const [data,setData]=useState([
//     {
//       skills:[]
//     }
//   ])
//   const [result, setResult] = useState([]);

//   const submitHandler=e=>{
//     e.preventDefault()
//   }
// const handleChange=e=>{
//   const {value,checked}=e.target;
//   setData((prevData) => {
//     return {
//       ...prevData,
//       skills: checked
//         ? [...prevData.skills, value]
//         : prevData.skills.filter((item) => item !== value),
//     };
//   });
  
// }
// function sub(){
//   setResult([...result, data.skills]);
//   setData({
//     skills: [],
//   });
// }
//   return (
    
//     <div>
//       <form onSubmit={submitHandler}>
//       Html:<input type='checkbox' value="html" onChange={handleChange}/><br/>
//       Css:<input type='checkbox'  value="css" onChange={handleChange}/><br/>
//       Javascript:<input type='checkbox' value="javascript" onChange={handleChange}/><br/>
//       react js:<input type='checkbox' value="react js" onChange={handleChange}/><br/>
//       <button onClick={()=>sub()}>Submit</button>
//       </form>
//     </div>
//   )
// }

// export default App
import React, { useState } from 'react';

function Boxes() {
  const [data, setData] = useState({
    gen:'',
    skills: [],
  });

const [result,setResult]=useState([])
  const changeHandler = (e) => {
    const { value, checked } = e.target;
    // setData({...data,skills: checked ? [...data.skills, value] : data.skills.filter((item) => item !== value),})
    setData({...data,skills : checked ? [...data.skills,value]:data.skills.filter((item)=> item !== value)})
  };
const genhandler=e=>{
  setData({...data,[e.target.name]:e.target.value})
}
  const submitHandler = (e) => {
    e.preventDefault()
   setResult([...result,data])
   setData({
    gen:"",
    skills:[]
   })
  };

  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          Html:
          <input type="checkbox" onChange={changeHandler} value="Html" name="skills" /><br />
          Css:
          <input type="checkbox" onChange={changeHandler} value="Css" name="skills" /><br />
          Javascript:
          <input type="checkbox" onChange={changeHandler} value="Javascript" name="skills" /><br />
          React js:
          <input type="checkbox" onChange={changeHandler} value="React js" name="skills" /><br />
          Male<input type='radio' name='gen' value="male" onChange={genhandler}/>
          Female<input type='radio' name='gen' value="female" onChange={genhandler}/>
          others<input type='radio' name='gen' value="others" onChange={genhandler}/><br/>
          <button type="submit">Submit</button>
        </form>
        <div>
          <table>
            <thead>
              <th>Gender</th>
              <th>Domain</th>
            </thead>
            <tbody>
              {
                result.map((s)=>{
                  return(
                    <tr>
                      <td>{s.gen}</td>
                      <td>{s.skills.join(', ')}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Boxes;
