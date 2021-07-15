import React, {Component} from 'react';
import PostItem from './PostItem.js'
import PostForm from './PostForm.js'
import './Posts.css'

class Posts extends Component {

    state = {
        maxNo: 3,
        boards: [
            {
                brdno: 1,
                brdwriter: 'Lee SunSin',
                brdtitle: 'If you intend to live then you die',
                hashtag: '#hashtag1 #hashtag2',
                brddate: new Date(),
                brdcontent : "content example"
            },
            {
                brdno: 2,
                brdwriter: 'So SiNo',
                brdtitle: 'Founder for two countries',
                hashtag : '#hashtag1 #hashtag3',
                brddate: new Date(),
                brdcontent : "content example2"
            }
        ],
         selectedBoard:{}
    }
    
    handleSaveData = (data) => {
        if (!data.brdno) {            // new : Insert
            this.setState({
                maxNo: this.state.maxNo+1,
                boards: this.state.boards.concat({brdno: this.state.maxNo, brddate: new Date(), ...data }),
                selectedBoard: {}
            });
        } else {                                                        // Update
            this.setState({
                boards: this.state.boards.map(row => data.brdno === row.brdno ? {...data }: row),
                selectedBoard: {}
            })            
        }
    }
    
    handleRemove = (brdno) => {
        this.setState({
            boards: this.state.boards.filter(row => row.brdno !== brdno)
        })
    }
    
    handleSelectRow = (row) => {
        this.setState({selectedBoard:row});
    }

    
    render() {
            const { boards , selectedBoard } = this.state;
            return (
                <div>

                    {/* 새로운글 등록 */}
                    <PostForm selectedBoard = {selectedBoard} onSaveData={this.handleSaveData}/>
                    
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
                                    (<PostItem key={row.brdno} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow}/>) 
                                )
                            } 
                    </ul>
                </div>
            );
        }
}
export default Posts;
