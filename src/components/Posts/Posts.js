import React, {Component} from 'react';
import Modal from 'react-modal';
import PostItem from './PostItem.js'
import PostForm from './PostForm.js'
import axios from "axios";
import './Posts.css'

class Posts extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen : false, //flag for modal window
            boards: [        //important list which contains core data of posts
                {
                    _id: 1,
                    brdwriter: 'Lee SunSin',
                    brdtitle: 'If you intend to live then you die',
                    hashtag: '#hashtag1 #hashtag2',
                    brddate: new Date(),
                    brdcontent : "content example1"
                },
                {
                    _id: 2,
                    brdwriter: 'So SiNo',
                    brdtitle: 'Founder for two countries',
                    hashtag : '#hashtag1 #hashtag3',
                    brddate: new Date(),
                    brdcontent : "content example2"
                }
            ],
             selectedBoard:{}  //selected board contains one or zero board content to rewrite/remove
        }
    }
    
    openModal = () => {
        this.setState({ isModalOpen: true });
      };
    
    closeModal = () => {
        this.setState({ isModalOpen: false });
      };
    

    componentDidMount() {
        axios.get(`/api/post/`)
        .then(response => {
            this.setState({boards: [...response.data]})
        });
    }
    
    handleSaveData = (data) => {
        if (!data._id) {            // new : Insert
            axios.post(`/api/post/add`, 
                {brddate: new Date(), ...data }
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
                brddate: new Date(), ...data
            })
            .then(() => axios.get(`/api/post/`))
            .then(response => {
                this.setState({
                    selectedBoard: {},
                    boards: [...response.data]
                })
            });
            /*
            this.setState({
                boards: this.state.boards.map(row => data._id.equals(row._id)  ? {...data }: row),
                selectedBoard: {}
            })         */   
        }

        this.closeModal();
    }
    
    handleRemove = (_id) => {
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
    }


    
    render() {
            const { boards , selectedBoard } = this.state;

            
            return (
                <div>

                    {/* 새로운글 등록 */}
                        <button onClick={this.openModal}>Modal Open</button>
                        <Modal isOpen={this.state.isModalOpen} close={this.closeModal} >
                            <PostForm selectedBoard = {selectedBoard} onSaveData={this.handleSaveData}/>
                        </Modal>
                    <h3 class= "page_title">
                        <img class = "main_img" src= "/img/house.png"></img>
                        <em class="main_text">
                            자유게시판
                        </em>
                        <span class="detail_text">
                            가장 빠른 기숙사 새소식 업데이트
                        </span>
                    </h3> 
                    
                    <ul id = "postsList">
                    { 
                                boards.map(row => 
                                    (<PostItem key={row._id} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow}/>) 
                                )
                            } 
                    </ul>
                </div>
            );
        }
}
export default Posts;
