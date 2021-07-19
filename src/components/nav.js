import React, {Component} from 'react';
import "./nav.css";
import { Link } from "react-router-dom";

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      active : ""
    }
  }

  pageList = ["post", "reserve", "report", "login", ""];

  navClicked = (num) => {
    this.setState({active : this.pageList[num]});
  };

  render(){
    
    return (
      <div className="navbar">
        <div className = "main"><Link to="/main" className = " main" onClick= {() => this.navClicked(4)}>Home</Link></div>
        <div className = "list_navbar_wraper">
          <ul class = "list_navbar">
            <li><Link to="/posts" className = {this.state.active ==="post" ? "activebtn": "unactivebtn"} onClick= {() => this.navClicked(0)}>Posts</Link></li>
            <li><Link to="/reserve" className = {this.state.active==="reserve" ? "activebtn": "unactivebtn"} onClick= {() => this.navClicked(1)}>Reserve</Link></li>
            <li><Link to="/report"  className = {this.state.active==="report" ? "activebtn": "unactivebtn"} onClick= {() => this.navClicked(2)}> Report</Link></li>
            <li><Link to="/login" className = {this.state.active==="login" ? "activebtn": "unactivebtn"} onClick= {() => this.navClicked(3)}>Login</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
