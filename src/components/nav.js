import React from 'react'
import "./nav.css";
import { Link } from "react-router-dom";

const Navigation = () => 
  <div className="navbar">
    <div className = "main"><Link to="/main" className = " main">Home</Link></div>
    <div className = "list_navbar_wraper">
      <ul class = "list_navbar">
        <li><Link to="/posts" className = "navbar_content posts">Posts</Link></li>
        <li><Link to="/reserve" className = "navbar_content reserve">Reserve</Link></li>
        <li><Link to="/report" className = "navbar_content report"> Report</Link></li>
        <li><Link to="/login" className = "navbar_content login">Login</Link></li>
      </ul>
    </div>
  </div>
export default Navigation;
