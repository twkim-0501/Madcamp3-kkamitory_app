import React, {Component} from 'react';
import BuyTogetherItem from './BuyTogetherItem'
import BuyTogetherForm from './BuyTogetherForm'
import axios from "axios";
import Modal from 'react-modal'
import './BuyTogether.css'

class BuyTogether extends Component {
    state = {
      selected_board : {},
      profile : "",
      nickname : "",
      kakao_id : "",
      alertopen : false,
      isModalOpen : false,
      eat_boards: [],
      selectedBoard:{}
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
  
      handleSelectRow = (row) => {
        this.setState({selectedBoard:row});
        this.openModal();
      }
  
      handleNewPost = ()=> {
        this.handleSelectRow({});
      };

      handleRemove = (_id) => { //글 삭제하기
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
      this.setState({alertopen: false});
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
                    <button onClick={this.handleNewPost} className = "plus_btn"><img className = "plus_btn_img" src = "/img/addBtn.png"></img></button>
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
      </div>
    );
  }
}
export default BuyTogether;