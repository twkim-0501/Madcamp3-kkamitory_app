import React, {Component} from 'react'
import axios from "axios";
import ReportStudent from './ReportStudent.js'
import ReportAdmin from './ReportAdmin.js'

class ReportHome extends Component {
    
    
  render(){
    return (
      <div>
        <ReportAdmin></ReportAdmin>
        <ReportStudent></ReportStudent>
      </div>
      
    );
  }
}
export default ReportHome;

