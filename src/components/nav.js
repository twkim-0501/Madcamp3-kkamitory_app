import React from 'react'
import "./nav.css";
import { Link } from "react-router-dom";

const Navigation = () => 
  <div className="navbar">

    <Link to="/main">
      Home
    </Link>
    <Link to="/posts">
      Posts
    </Link>
    <Link to="/reserve">
      Reserve
    </Link>
    <Link to="/report">
      Report
    </Link>
  </div>
export default Navigation;
