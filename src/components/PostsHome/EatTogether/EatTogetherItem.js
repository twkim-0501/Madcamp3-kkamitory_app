import React, {Component} from 'react';
import axios from "axios";
import { Route } from 'react-router-dom';
class EatTogetherItem extends Component { 
    

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
        let data = {
            _id : row._id,
            brdwriter : row.brdwriter,
            brdtitle: row.brdtitle,
            brdcontent:row.brdcontent,
            total_member:row.total_member,
            join_profile_list : [...row.join_profile_list, 
                {
                    profile_id : this.props.kakao_id, 
                    profile_nickname: this.props.nickname,
                    profile_img :this.props.join_profile
                }]
        }
        this.props.onSaveData(data); //data
    }


    render() { 
        return( 
            <li>
                <div class = "div-box">
                    <div class = "EatTogetherItem">
                        <span class = "wrap_content">
                            <span class = "info_text">
                                <div class="profile_box">
                                    <img class="profile" src={this.props.profile}></img>
                                </div>
                                <div class="name">
                                <a>{this.props.nickname}</a>
                                </div>
                                
                            </span>
                            <div class = "title_text">
                                <strong onClick={this.handleSelectRow}>{this.props.row.brdtitle}</strong>
                                <button onClick={this.handleRemove}>X</button>
                            </div>
                            <span class = "content_text">
                                <a>{this.props.row.brdcontent}</a>
                            </span>
                            <div className = "join_btn_wraper">
                                <button onClick={this.handleJoin}>함께하기</button>
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
                </div>  
            </li>
        ); 
    } 
}

export default EatTogetherItem;