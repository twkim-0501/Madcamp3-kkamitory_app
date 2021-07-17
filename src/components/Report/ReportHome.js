import React, {Component} from 'react'
import axios from "axios";
import ReportStudent from './ReportStudent.js'

class ReportHome extends Component {
  constructor(props){
          
        }
    
    
  render(){
    const { e } = this.state;
    return (
      <ReportStudent></ReportStudent>
    );
  }
}
export default ReportHome;

