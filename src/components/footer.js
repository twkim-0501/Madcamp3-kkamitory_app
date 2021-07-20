import React, {Component} from 'react';
import "./footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {

  render(){
    return (
         <div className = "footer_wraper">
            <div className="footer_bar">
                <div className = "footer_item"><div className= "footer_text">TAEWOO</div></div>
                <div className = "footer_item"><div className= "footer_text">HYEMIN</div></div>
                <div className = "footer_item"><div className= "footer_text">TAEWOO</div></div>
                <div className = "footer_item"><div className= "footer_text">HYEMIN</div></div>
                <div className = "footer_item"><div className= "footer_text">TAEWOO</div></div>
                <div className = "footer_item"><div className= "footer_text">HYEMIN</div></div>
                <div className = "footer_item"><div className= "footer_text">TAEWOO</div></div>
                <div className = "footer_item"><div className= "footer_text">HYEMIN</div></div>
            </div>
         </div>
      
    );
  }
}

export default Footer;
