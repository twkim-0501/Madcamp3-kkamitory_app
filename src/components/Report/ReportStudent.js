import React, {Component} from 'react'
import axios from "axios";
// import ReportAdmin from './ReportAdmin.js'

class ReportStudent extends Component {
  constructor(props){
        super(props);
        this.state={
          isLogin : false,
          name : "",
          bChecked : false,
          report_name : ""
        }
    }

    componentDidMount = () => {
      const GetUser = this;
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: function ({ kakao_account }) {
          const { profile } = kakao_account;
          // 수집한 사용자 정보로 페이지를 수정하기 위해 setState
          GetUser.setState({
            name: profile.nickname,
          });
          if(profile.nickname != null){
            GetUser.setState({
                isLogin: true
              });
          }
          else{
            GetUser.setState({
                isLogin: false
            });
          }
        },
        fail: function (error) {console.log(error);},
      });
    }

    checkHandler = (e) => {
      if(e.checked==true){
        this.setState({bChecked: true})
      }else{
        this.setState({bChecked:false})
      }
    };
    
    
    saveBtnClicked = () => {
        if(this.state.bChecked){ //익명처리
          this.state.report_name = ""
        }else{
          this.state.report_name = this.state.name //카카오 이름 그대로
        }
        axios.post(`/api/report/add`, 
              {
                    report_name : this.state.report_name,
                    report_title : this.title.value,
                    report_content : this.content.value,
                    report_address : this.address.value
              }
            )
    }
    
  render(){
    const {  } = this.state;
    return (
      <div>
        <h3 className= "page_title">
                        <img className = "main_img" src= "/img/alert.png"></img>
                        <em className="main_text">
                            신고하기
                        </em>
                        <span className="detail_text">
                            실시간 신고 접수
                        </span>
          </h3> 
          <form  name = "report_upload" class = "report_form_box" onSubmit={this.handleSubmit}> 
                <input type="checkbox" name="anonymous" onChange = {(e) => this.checkHandler(e)}></input>
                <input class = "report_form_box_category" placeholder="title" ref={node => this.title = node}/>
                <input class = "report_form_box_category" placeholder="content" ref={node => this.content = node}/>
                <input class = "report_form_box_category" placeholder="address" ref ={node => this.address = node}/>
                <button type="submit" onCliick = {this.saveBtnClicked}>Save</button> 
            </form>
      </div>
    );
  }
}
export default ReportStudent;

