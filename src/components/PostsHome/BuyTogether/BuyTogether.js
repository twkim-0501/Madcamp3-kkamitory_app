import React, {Component} from 'react';
import BuyTogetherItem from './BuyTogetherItem'
import BuyTogetherForm from './BuyTogetherForm'
import axios from "axios";
import Modal from 'react-modal'
import './BuyTogether.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={3} variant="filled" {...props} />;
}
class BuyTogether extends Component {
    state = {
      selected_board : {},
      profile : "",
      nickname : "",
      kakao_id : "",
      alertopen : false,
      isModalOpen : false,
      eat_boards: [],
      selectedBoard:{},
      alertlogin: false,
      addalert: false,
      alertinput: false,
      alertuser: false,
    }
  
    openModal = () => { //등록 or 수정창 열기 (front)
      this.setState({ isModalOpen: true });
    };
  
    closeModal = () => { //등록 or 수정창 닫기 (front)
      this.setState({ isModalOpen: false });
    };

    componentDidMount(){
      //db에서 getAll
      axios.get(`/api/buy_post/`)
      .then(response => {
          this.setState({eat_boards: [...response.data]});
      });

      const GetUser = this;
        window.Kakao.API.request({
            url: "/v2/user/me",
            success: function ({ id, kakao_account }) {
              const { profile } = kakao_account;
              // 수집한 사용자 정보로 페이지를 수정하기 위해 setState
              GetUser.setState({
                kakao_id : id,
                nickname: profile.nickname,
                profile: profile.profile_image_url
              });
            },
            fail: function (error) {
              console.log(error);
            }
          });
      }
      handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            alertinput: false,
            alertlogin: false,
            addalert: false,
        });
      }

      handleSelectRow = (row) => {
        console.log(this.state.kakao_id);
        console.log(row.profile_id);
        if(row.profile_id == undefined || this.state.kakao_id==row.profile_id){
          this.setState({selectedBoard:row});
          this.openModal();
        }
        else{
          console.log("id not match");
        }
      }
  
      handleNewPost = ()=> {
        if(this.state.profile.length == 0){
          this.setState({alertlogin: true});
          return;
        }
        this.handleSelectRow({});
      };

      handleRemove = (_id,row) => { //글 삭제하기
        console.log(row);
        console.log(this.state.kakao_id)
        if(row.profile_id != this.state.kakao_id){
          this.setState({alertuser: true})
          return;
        }
        axios.post(`/api/buy_post/remove`, {_id: _id})
        .then(() => axios.get(`/api/buy_post/`))
        .then(response => {
            this.setState({
                selectedBoard: {},
                eat_boards: [...response.data]
            })
        });
      }

    handleSaveData = (data) => { 
      if(this.state.profile.length == 0){
        this.setState({alertlogin: true});
        return;
      }
      this.setState({alertopen: false});
      console.log(data);
      if(!(data.brditem && data.brdcontent && data.total_member)){
        this.setState({alertinput: true});
        return;
      }
      if (!data._id) { // new : Insert
        //서버통신
           axios.post(`/api/buy_post/add`, 
              {
                brddate: new Date(), 
                ...data, 
                profile: this.state.profile, 
                profile_id : this.state.kakao_id, 
                brdwriter: this.state.nickname,
                join_profile_list : [{profile_id : this.state.kakao_id, 
                                      profile_nickname: this.state.nickname}]
              })
           .then(() => axios.get(`/api/buy_post/`))
           .then(response => {
               this.setState({
                   selectedBoard: {},
                   eat_boards: [...response.data] 
               })
           });
      // Update
      } else {
            axios.post(`/api/buy_post/update`, {
                brddate: new Date(), ...data
            })
            .then(() => axios.get(`/api/buy_post/`))
            .then(response => {
              if(response.status == 200){
               this.setState({
                   selectedBoard: {},
                   eat_boards: [...response.data],
               })
              }
              else{
                console.log("err!");
                //인원초과 메세지 띄우기!
                //태우
              }
               
            });
      }
      this.setState({addalert: true});
      this.closeModal();
    }

    onBackButtonClicked = () => { //새글 등록 취소
      this.closeModal();
  }
  handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    this.setState({
        alertinput: false,
        alertlogin: false,
        addalert: false,
        alertuser: false,
    });
}

  render(){
    const { eat_boards , selectedBoard } = this.state;
    return (
      <div>
          <h3 class= "page_title">
              <img class = "main_img" src= "/img/youth.png"></img>
              <em class="main_text">
                  공구하기
              </em>
              <span class="detail_text">
                  함께라면 살 수 있어
              </span>
          </h3> 
          
          <div className = "modal_btn_wraper">
                    <button onClick={this.handleNewPost} className = "plus_btn"><img className = "plus_btn_img" src = "/img/addBtn_blue.png"></img></button>
                    </div>
                    <div className = "modal_wraper">
                        <Modal isOpen={this.state.isModalOpen} close={this.closeModal} >
                            { <BuyTogetherForm selectedBoard = {selectedBoard} onSaveData={this.handleSaveData} onBackButtonClicked={this.onBackButtonClicked} kakao_id= {this.state.kakao_id} profile = {this.state.profile} /> }
                    </Modal>
          </div>
          
          <ul id = "postsList">
          { 
                      eat_boards.map(row => 
                          (<BuyTogetherItem key={row._id} row={row} kakao_id= {this.state.kakao_id} profile = {this.state.profile} onRemove={this.handleRemove} onSaveData = {this.handleSaveData} onSelectRow={this.handleSelectRow}/>) 
                      )
                  } 
          </ul>
          <Snackbar open={this.state.alertlogin} autoHideDuration={3000} onClose={this.handleCloseAlert}>
              <Alert onClose={this.handleCloseAlert} severity="warning">
              로그인이 되어 있지 않습니다
              </Alert>
          </Snackbar>
          <Snackbar open={this.state.addalert} autoHideDuration={3000} onClose={this.handleCloseAlert}>
              <Alert onClose={this.handleCloseAlert} severity="success">
              새로운 게시물이 추가되었습니다
              </Alert>
          </Snackbar>
          <Snackbar open={this.state.alertinput} autoHideDuration={3000} onClose={this.handleCloseAlert}>
              <Alert onClose={this.handleCloseAlert} severity="warning">
              입력되지 않은 항목이 존재합니다
              </Alert>
          </Snackbar>
          <Snackbar open={this.state.alertuser} autoHideDuration={3000} onClose={this.handleCloseAlert}>
              <Alert onClose={this.handleCloseAlert} severity="warning">
              작성자만 삭제가 가능합니다
              </Alert>
          </Snackbar>
      </div>
    );
  }
}
export default BuyTogether;