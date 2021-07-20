import React, {Component} from 'react'

class ReportItem extends Component {
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
      </div>
    );
  }
}
export default ReportItem;

