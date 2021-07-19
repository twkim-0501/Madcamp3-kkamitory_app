import React, {Component} from 'react'
import axios from "axios";
import ReportItems from './ReportItems';

class ReportAdmin extends Component {
    constructor(props){
          super(props);
          this.state={
            
          }
      }
  
      componentDidMount = () => {
        console.log("ReportAdmin");
      }

    render(){
      const {  } = this.state;
      return (
        <div>
          <ReportItems/>
        </div>
      );
    }
  }
  export default ReportAdmin;
  