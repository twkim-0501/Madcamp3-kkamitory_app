import React from 'react'
import { Link } from "react-router-dom";

const Navigation = () => 
  <div className="Navigtion">
    <Link to="/">
      Main
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
