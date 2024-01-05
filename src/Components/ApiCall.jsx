import React, { useEffect, useState } from "react";
import axios from 'axios'
 export const ApiCall=()=>{
    const [country,setCountries]=useState([])
      const getdata=()=>{
        axios.get("https://restcountries.com/v3.1/all")
        .then((res)=>{
            setCountries(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
      }
    return(
        <div>
            <button onClick={()=>{getdata()}}>Get Data</button>
            {
                country.length>0 && country.map((c,i)=>{
                    return(
                        <li key={i}>{c.name.common}</li>
                    )
                })
            }
        </div>
    )
}
