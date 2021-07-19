import React, {Component} from 'react'
import "./ReportAdmin.css"
import axios from "axios";
import ReportItems from './ReportItems';
// import ReportAdmin from './ReportAdmin.js'

class ReportAdmin extends Component {
    constructor(props){
        super(props);
        this.state = {
            reports : [],
        }
    }
    // reports = db에서 받아온 json list
    reports =[{ 
        _id: "",
        report_name :"이혜민",
        report_title : "아름관 바선생",
        report_content : "아름관 1층 복도에서",
        report_address : "아름관 150호"
    }]
    componentDidMount() {
        axios.get(`/api/report/`)
        .then(response => 
            {
                this.setState({reports: response.data})
            });
    }
    handleRender = () => {
        axios.get(`/api/report/`)
        .then(response => 
            {
                this.setState({reports: response.data})
            });
    }
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
                    this.state.reports.map(row => 
                        (<ReportItems key={row._id} row={row} handleRender={this.handleRender}/>) 
                    )
                } 
            </ul>
        </div>
        );
    }
}
export default ReportAdmin;
