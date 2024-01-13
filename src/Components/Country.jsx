import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Link, Outlet } from "react-router-dom";
const Country =()=>{
    const [countries,setCountries]=useState([])
    useEffect(()=>{
       axios.get("https://restcountries.com/v3.1/all")
       .then((res)=>{
        setCountries(res.data)
       })
       .catch((error)=>{
        console.log(error)
       }) 
    },[])
    return(
        <div className="container">
            <div className="main1">
            <ul>
           {
            countries.length>0 && countries.map((country)=>{
                  return(
                    <Link to={"details/"+country.name.common}><li>{country.name.common}</li></Link>
                  )
            })
        }
           </ul>
           <div >
           <Outlet></Outlet>
           </div>
            </div>
         
        </div>
    )
}
export default Country;
