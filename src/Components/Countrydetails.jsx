import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Countrydetails() {
    const [countrydetails,setCountridetails]=useState(null)
    var {cname} =useParams();
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/name/"+cname)
        .then((res)=>{
            setCountridetails({...res.data[0]})
        })
    },[cname])
  return (
    <div className="main">
       {
        countrydetails && (
            <>
            <h1>{countrydetails.name.common}</h1>
            <img src={countrydetails.flags.png} alt="" />
            </>
            
        )
       }
        
    </div>
  )
}

export default Countrydetails