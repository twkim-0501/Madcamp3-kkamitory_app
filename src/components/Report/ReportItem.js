import React, {Component} from 'react'
import axios from "axios";

class ReportItem extends Component {

  handleDeleteOne = () => {
      axios.post(`/api/report/deleteone`, {_id: this.props.row._id})
      .then(() => {this.props.handleRender()})
  }

  render(){
    const report_name = this.props.row.report_name==""?"익명":this.props.row.report_name;
    console.log(this.props.row.report_name=="");
    return (
      <div className = "report_box">
        <div className = "report_student_info">
            <div className = "report_name_admin">{report_name}</div>
            <div className = "report_address_admin">{this.props.row.report_address}</div>
        </div>
        <div className = "report_title_admin">{this.props.row.report_title}</div>
        <div className = "report_content_admin">{this.props.row.report_content}</div>
        <div className = "checkButton" onClick = {() => this.handleDeleteOne()}>확인</div>
      </div>

    );
  }
}
export default ReportItem;

