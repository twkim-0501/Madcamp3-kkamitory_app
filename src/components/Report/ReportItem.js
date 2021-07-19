import React, {Component} from 'react'

class ReportItem extends Component {
    
  render(){
    return (
      <div>
        <div className = "report_student_info">
            <div className = "report_name">{this.props.row.report_name}</div>
            <div className = "report_address">{this.props.row.report_address}</div>
        </div>
        <div className = "report_title">{this.props.row.report_title}</div>
        <div className = "report_content">{this.props.row.report_content}</div>
      </div>
    );
  }
}
export default ReportItem;

