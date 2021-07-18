import React, {Component} from 'react'
import EatTogetherItem from './EatTogetherItem.js'
import EatTogetherForm from './EatTogetherForm.js'
import Modal from 'react-modal'
import axios from "axios";
import './EatTogether.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={3} variant="filled" {...props} />;
}
class EatTogether extends Component {
  constructor(props){
        super(props);
        this.state = {
          profile : "",
          nickname : "",
          alertopen : false,
          isModalOpen : false,
          selectedBoard : {},
          eat_boards: [
            // {
            //     _id: 1,
            //     brdwriter: 'Lee SunSin',
            //     menu: '화끈이 불닭 ',
            //     brddate: new Date(),
            //     brdcontent : "실속세트 매운맛으로 시켜드실분",
            //     join_profile_list : []
            // },
          ],
          selectedBoard:{},
          kakao_id: "",
          alertfull: false
        }
    }
    

    openModal = () => { //등록 or 수정창 열기 (front)
      this.setState({ isModalOpen: true });
    };
  
    closeModal = () => { //등록 or 수정창 닫기 (front)
      this.setState({ isModalOpen: false });
    };

    componentDidMount(){
      //db에서 getAll
      axios.get(`/api/eat_post/`)
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
                profile: profile.profile_image_url,
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
    

    handleSaveData = (data) => { 
          this.setState({alertopen: false});
          if (!data._id) { // new : Insert
            //서버통신
            console.log("add")
            console.log(this.state.kakao_id)
               axios.post(`/api/eat_post/add`, 
                  {
                    brddate: new Date(), 
                    ...data, 
                    profile: this.state.profile, 
                    profile_id : this.state.kakao_id, 
                    brdwriter: this.state.nickname, 
                    join_profile_list: []
                  })
               .then(() => axios.get(`/api/eat_post/`))
               .then(response => {
                   this.setState({
                       selectedBoard: {},
                       eat_boards: [...response.data] 
                   })
               });
          // Update
          } else {
            console.log("update")
               axios.post(`/api/eat_post/update`, {
                   brddate: new Date(), ...data, profile: this.state.profile
               })
               .then((res) => 
               { console.log(res.data==400);
                if(res.data==200){
                  axios.get(`/api/eat_post/`)
                  .then(response => {
                    this.setState({
                        selectedBoard: {},
                        eat_boards: [...response.data],
                    })
                  });
                }
                else{
                  console.log("꽉참");
                  this.setState({alertfull: true});
                }
                 
               })
          }
          this.setState({addalert: true});
          this.closeModal();
        }
   
    handleRemove = (_id) => { //글 삭제하기
        axios.post(`/api/eat_post/remove`, {_id: _id})
        .then(() => axios.get(`/api/eat_post/`))
        .then(response => {
            this.setState({
                selectedBoard: {},
                eat_boards: [...response.data]
            })
        });
    }

    onBackButtonClicked = () => { //새글 등록 취소
      this.closeModal();
  }
  handleCloseAlert = (event, reason) => {
    if (reason === 'clickaway') {
        return;
    }
    this.setState({
        alertfull: false,
    });
}
    
  render(){
    const { eat_boards , selectedBoard } = this.state;
    //console.log(this.state.eat_boards);
    return (
      <div>
          <h3 class= "page_title">
              <img class = "main_img" src= "/img/delivery.png"></img>
              <em class="main_text">
                  배달팟 모으기
              </em>
              <span class="detail_text">
                  오늘의 밥 친구
              </span>
          </h3> 

          <div className = "modal_btn_wraper">
                    <button onClick={this.handleNewPost} className = "plus_btn"><img className = "plus_btn_img" src = "/img/addBtn.png"></img></button>
                    </div>
                    <div className = "modal_wraper">
                        <Modal isOpen={this.state.isModalOpen} close={this.closeModal} >
                            { <EatTogetherForm selectedBoard = {selectedBoard} onSaveData={this.handleSaveData} onBackButtonClicked={this.onBackButtonClicked}kakao_id={this.state.kakao_id} nickname = {this.state.nickname}/> }
                    </Modal>
          </div>
          
          <ul id = "postsList">
                  { 
                      eat_boards.map(row => 
                          (<EatTogetherItem key={row._id} row={row} onRemove={this.handleRemove} onSaveData={this.handleSaveData} nickname = {row.brdwriter} profile = {row.profile} join_profile = {this.state.profile}  onSelectRow={this.handleSelectRow} kakao_id={this.state.kakao_id} usernickname={this.state.nickname}/>) 
                      )
                  } 
          </ul>

        <Snackbar open={this.state.alertfull} autoHideDuration={3000} onClose={this.handleCloseAlert}>
          <Alert onClose={this.handleCloseAlert} severity="warning">
            인원이 꽉 찼습니다ㅠㅠ
          </Alert>
        </Snackbar>
      </div>
    );
  }
}
export default EatTogether;

