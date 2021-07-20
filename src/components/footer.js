import React, {Component} from 'react';
import "./footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {

  render(){
    return (
        // <div className = "footer_wraper">
            <div className="footer_bar">
                <div className = "footer_item">2021 MadCamp</div>
                <div className = "footer_item">Taewoo Kim</div>
                <div className = "footer_item">Hyemin Lee</div>
                <div className = "footer_item">KKAMITORY</div>
            </div>
        // </div>
      
    );
  }
}

export default Footer;
