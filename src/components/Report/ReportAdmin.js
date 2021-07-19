import React, {Component} from 'react'
import axios from "axios";
import "./ReportAdmin.css"
import ReportItem from './ReportItem.js'
// import ReportAdmin from './ReportAdmin.js'

class ReportAdmin extends Component {
  
    // reports = db에서 받아온 json list
    reports =[{ 
        report_name :"이혜민",
        report_title : "아름관 바선생",
        report_content : "아름관 1층 복도에서",
        report_address : "아름관 150호"
    }]
    render(){
        return (
        <div>
            <h3 className= "page_title">
                <img className = "main_img" src= "/img/alert.png"></img>
                <em className="main_text">
                    신고하기 접수 현황
                </em>
            </h3> 
            <ul id = "reportsList">
                { 
                    this.reports.map(row => 
                        (<ReportItem key={row._id} row={row}/>) 
                    )
                } 
            </ul>
        </div>
        );
    }
}
export default ReportAdmin;

