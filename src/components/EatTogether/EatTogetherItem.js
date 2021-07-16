import React, {Component} from 'react';
import { Route } from 'react-router-dom';
class EatTogetherItem extends Component { 
    state = {
        join_profile_list : [
            // {profile_img:"/img/delivery.png", profile_id : "lhmin0614"},
        ]
    } //해당 배달팟에 참여하는 사람들 정보 목록.
    

    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row._id);
    }    
    
    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }    

    handleJoin = () => {
        // if(id 이미 존재하면 거절)
        console.log(this.props.profile);
        this.setState({join_profile_list: [...this.state.join_profile_list, {profile_img : this.props.profile, profile_id : this.props.kakao_id}]});
        console.log(this.state.join_profile_list);
    }

    render() { 
        const { join_profile_list} = this.state;
        return( 
            <li>
                <div class = "div-box">
                    <div class = "EatTogetherItem">
                        <span class = "wrap_content">
                            <span class = "info_text">
                                <div class="profile_box">
                                    <img class="profile" src="/logo192.png"></img>
                                </div>
                                <div class="name">
                                <a>{this.props.row.brdwriter}</a>
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
                                    join_profile_list.map(row => 
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