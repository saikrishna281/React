import React from 'react'
import { Link } from 'react-router-dom'
function Headers() {
  return (
    <div>
        <Link to="/aboutus">AboutUs</Link> &nbsp; &nbsp; &nbsp;
        <Link to="/contactus">ContactUs</Link>&nbsp; &nbsp; &nbsp;
        <Link to="/services">Services</Link>&nbsp; &nbsp; &nbsp;
        <Link to="/settings">Settings</Link>&nbsp; &nbsp; &nbsp;
        <Link to="/country">Country</Link>
    
    </div>
  )
}

export default Headers