import React, {Component} from 'react';
import Modal from 'react-modal';
import PostItem from './PostItem.js'
import PostForm from './PostForm.js'
import PostDetail from './PostDetail.js'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from "axios";
import './Posts.css'


function Alert(props) {
    return <MuiAlert elevation={3} variant="filled" {...props} />;
  }
class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen : false, // modal for post add or update
            isDetailModelOpen : false, // modal for 
            boards: [        //important list which contains core data of posts
            ],
            selectedBoard:{},  //selected board contains one or zero board content to rewrite/remove
            nickname: 0,
            profile: "",
            isLogin: false,
            alertopen: false,
            addalert: false,
            alertinput: false
        }
    }
    //첫로딩
    componentDidMount() {
        //db에서 getAll
        axios.get(`/api/post/`)
        .then(response => {
            this.setState({boards: [...response.data]})
        });

        const GetUser = this;

        window.Kakao.API.request({
            url: "/v2/user/me",
            success: function ({ kakao_account }) {
              const { profile } = kakao_account;
              // 수집한 사용자 정보로 페이지를 수정하기 위해 setState
              GetUser.setState({
                nickname: profile.nickname,
                profile: profile.profile_image_url,
              });
              if(profile.profile_image_url != null){
                GetUser.setState({
                    isLogin: true
                  });
              }
              else{
                GetUser.setState({
                    isLogin: false
                });
              }
              //console.log(GetUser.state.profile_image_url);
            },
            fail: function (error) {
              console.log(error);
            },
          });
    }

    openModal = () => { //등록 / 수정창 열기 
        this.setState({ isModalOpen: true });
      };
    
    closeModal = () => { //등록 / 수정창 닫기 
        this.setState({ isModalOpen: false });
      };

    openDetailModal = () => { //자세히보기 창 열기
        this.setState({isDetailModalOpen : true});
    };
    
    closeDetailModal = () => {
        this.setState({isDetailModalOpen : false});
    }

    
    handleSaveData = (data) => { //새글 등록하기
        console.log(data);
        if(!(data.brdtitle && data.brdcontent && data.hashtag)){
            console.log("입력안됨");
            this.setState({alertinput: true});
            return;
        }
        this.setState({alertopen: false});
        if (!data._id) { // new : Insert
            axios.post(`/api/post/add`, 
                {brddate: new Date(), ...data, profile: this.state.profile, brdwriter: this.state.nickname}
            )
            .then(() => axios.get(`/api/post/`))
            .then(response => {
                this.setState({
                    selectedBoard: {},
                    boards: [...response.data]
                })
            });


        } else {                                                        // Update

            axios.post(`/api/post/update`, {
                brddate: new Date(), ...data, profile: this.state.profile
            })
            .then(() => axios.get(`/api/post/`))
            .then(response => {
                this.setState({
                    selectedBoard: {},
                    boards: [...response.data],
                })
            });
        }
        this.setState({addalert: true});
        this.closeModal();
    }

    handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            alertopen: false,
            addalert: false,
            alertinput: false,
        });
    }

    onBackButtonClicked = () => { //새글 등록 취소
        this.closeModal();
    }
    
    handleRemove = (_id) => { //글 삭제하기
        axios.post(`/api/post/remove`, {_id: _id})
        .then(() => axios.get(`/api/post/`))
        .then(response => {
            this.setState({
                selectedBoard: {},
                boards: [...response.data]
            })
        });
    }
    
    handleSelectRow = (row) => {
        this.setState({selectedBoard:row});
        console.log("selectedRow is "+ row.brdtitle);
        this.openModal();
    }

    handleNewPost = ()=>{
        if(this.state.isLogin){
            this.handleSelectRow({});
        }
        else{
            this.setState({alertopen: true});
            console.log("not login");
        }
        
    }

    handleDetailShow = (row) => {
        this.setState({selectedBoard:row})
        this.openDetailModal();
    }

    onDetailBackButtonClicked = () => { //새글 등록 취소
        this.closeDetailModal();
    }


    
    render() {
            const { boards , selectedBoard} = this.state;
            return (
                <div>
                    <h3 className= "page_title">
                        <img className = "main_img" src= "/img/house.png"></img>
                        <em className="main_text">
                            자유게시판
                        </em>
                        <span className="detail_text">
                            가장 빠른 기숙사 새소식 업데이트
                        </span>
                    </h3> 
                   
                    <div className = "modal_btn_wraper">
                        <button onClick={this.handleNewPost} className = "plus_btn"><img className = "plus_btn_img" src = "/img/addBtn_blue.png"></img></button>
                    </div>
                    <div className = "modal_wraper">
                        <Modal isOpen={this.state.isModalOpen} close={this.closeModal} >
                            <PostForm selectedBoard = {selectedBoard} onSaveData={this.handleSaveData} onBackButtonClicked={this.onBackButtonClicked}/>
                        </Modal>
                    </div>

                    <div className = "modal_wraper">
                        <Modal isOpen = {this.state.isDetailModalOpen} close = {this.closeDetailModal}>
                            <PostDetail selectedBoard = {selectedBoard} onBackButtonClicked = {this.onDetailBackButtonClicked}></PostDetail>
                        </Modal>
                    </div>

                    <ul id = "postsList">
                    { 
                                boards.map(row => 
                                    (<PostItem key={row._id} row={row} onRemove={this.handleRemove}onDetailShow = {this.handleDetailShow} closeDetailShow = {this.closeDetailModal} onSelectRow={this.handleSelectRow}/>) 
                                )
                            } 
                    </ul>

                    <Snackbar open={this.state.alertopen} autoHideDuration={3000} onClose={this.handleCloseAlert}>
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
                </div>
            );
        }
}
export default Posts;