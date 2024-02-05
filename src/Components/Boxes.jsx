import React, { useState } from 'react';

function Boxes() {
  const [data, setData] = useState({
    skills: [],
  });
  const [result, setResult] = useState([]);

  const changeHandler = (e) => {
    const { value, checked } = e.target;
    console.dir(`${value} ${checked}`)
    setData((prevData)=>{
        return{...prevData,skills:checked ? [...prevData.skills,value]:prevData.skills.filter((item)=>item !== value)}
    })
  };

  const submitHandler = (e) => {
    
    e.preventDefault();
    setResult([...result, data.skills]);
    setData({
      skills: [],
    });
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
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
     
        {result.map((skill, index) => (
          <li key={index}>{skill.join(',')}</li>
           
        ))}
      </div>
    </div>
  );
}

export default Boxes;
