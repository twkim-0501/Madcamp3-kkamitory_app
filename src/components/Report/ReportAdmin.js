import React, {Component} from 'react'
import "./ReportAdmin.css"
import axios from "axios";
import ReportItem from './ReportItem';
// import ReportAdmin from './ReportAdmin.js'

class ReportAdmin extends Component {
    constructor(props){
        super(props);
        this.state = {
            reports : [],
        }
    }
    // reports = db에서 받아온 json list
    reports =[]
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
                        (<ReportItem key={row._id} row={row} handleRender={this.handleRender}/>) 
                    )
                } 
            </ul>
        </div>
        );
    }
}
export default ReportAdmin;
