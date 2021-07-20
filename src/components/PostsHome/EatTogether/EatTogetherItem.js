import React, {Component} from 'react';
import axios from "axios";
import { Route } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={3} variant="filled" {...props} />;
  }
class EatTogetherItem extends Component {
    constructor(props){
        super(props);
        this.state = {
          alertwriterjoin: false,
          alertdoublejoin: false,
        }
    }

    handleRemove = () => {
        const {row, onRemove } = this.props;
        onRemove(row._id);
    }    
    
    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }  
    
    handleJoin = (e) => {
        e.preventDefault();
        let row = this.props.row; 
        var join_id_list = row.join_profile_list.map(item => item.profile_id);
        //이미 참여한 경우 참여못하게!!!!!!
        if(join_id_list.includes(this.props.kakao_id)){
            console.log("이미 참여한 사람")
            this.setState({alertdoublejoin: true});
            return;
        }
        //작성자는 참여 못하게!!!!
        if(row.profile_id == this.props.kakao_id){
            console.log("작성자가 참여?!")
            this.setState({alertwriterjoin: true});
            return;
        }
        let data = {
            _id : row._id,
            profile_id: row.profile_id,
            brdwriter : row.brdwriter,
            brdtitle: row.brdtitle,
            brdcontent:row.brdcontent,
            total_member: row.total_member,
            join_profile_list : [...row.join_profile_list, 
                {
                    profile_id : this.props.kakao_id, 
                    profile_nickname: this.props.usernickname,
                    profile_img :this.props.join_profile
                }]
        }
        console.log(data);
        this.props.onSaveData(data); //data
    }
    handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            alertdoublejoin: false,
            alertwriterjoin: false,
        });
    }


    render() { 
        //console.log(this.props.row.join_profile_list)
        return( 
            <li>
                <div class = "div-box">
                    <div class = "EatTogetherItem">
                        <span class = "eat_wrap_content">
                            <span class = "info_text">
                                <div class="eat_profile_box">
                                    <img class="eat_profile" src={this.props.profile}></img>
                                </div>
                                <div class="name">
                                <a>{this.props.nickname}</a>
                                </div>
                                
                            </span>
                            <div class = "brd_title_text">
                                <strong >{this.props.row.brdtitle}</strong>
                                <button onClick={this.handleRemove}><img class = "xButton" src = "/img/xButton.png"></img></button>
                            </div>
                            <span class = "content_text">
                                <a>{this.props.row.brdcontent}</a>
                            </span>
                            <div className = "eat_btn_wraper">
                                <button className = "join_btn" onClick={this.handleJoin}>함께하기</button>
                                <button className = "modifyButton eatmodify" onClick={this.handleSelectRow}>수정하기</button>

                            </div>
                            <div className = "join_profile_list_box">
                                { 
                                    this.props.row.join_profile_list.map(row => 
                                        (<div className = "join_profile_box"><img class = "join_profile" src={row.profile_img}></img>
                                        </div>)
                                     )
                                } 
                            </div>
                        </span>
                    </div>
                    <Snackbar open={this.state.alertwriterjoin} autoHideDuration={3000} onClose={this.handleCloseAlert}>
                        <Alert onClose={this.handleCloseAlert} severity="warning">
                            개설자는 참여할 수 없습니다
                        </Alert>
                    </Snackbar>
                    <Snackbar open={this.state.alertdoublejoin} autoHideDuration={3000} onClose={this.handleCloseAlert}>
                        <Alert onClose={this.handleCloseAlert} severity="warning">
                            중복 참가는 불가능합니다
                        </Alert>
                    </Snackbar>
                </div>  
            </li>
        ); 
    } 
}

export default EatTogetherItem;