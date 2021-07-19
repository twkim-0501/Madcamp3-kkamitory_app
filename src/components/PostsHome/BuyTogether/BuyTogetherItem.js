import React, {Component} from 'react';
class BuyTogetherItem extends Component { 
    handleRemove = () => {
        const { row, onRemove } = this.props;
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
            brditem: row.brditem,
            brdcontent:row.brdcontent,
            total_member:row.total_member,
            join_profile_list : [...row.join_profile_list, 
                {
                    profile_id : this.props.kakao_id, 
                    profile_nickname: this.props.nickname,
                }]
        }
        this.props.onSaveData(data); //data
    }

    render() { 
        return( 
            <li>
                <div class = "div-box">
                    <div class = "BuyTogetherItem">
                        <span class = "wrap_content">
                            <span class = "info_text">
                                <div class="box">
                                    <img class="profile" src={this.props.row.profile}></img>
                                </div>
                                <div class="name">
                                <a>{this.props.row.brdwriter}</a>
                                </div>
                                
                            </span>
                            <div class = "title_text">
                                <strong onClick={this.handleSelectRow}>{this.props.row.brditem}</strong>
                                <button onClick={this.handleRemove}><img class = "xButton" src = "/img/xButton.png"></img></button>
                            </div>
                            <span class = "content_text">
                                <a>{this.props.row.brdcontent}</a>
                            </span>
                            <div>가격 합산 : {this.props.row.total_price}</div>
                            <div>인당 가격 : {parseInt(Number(this.props.row.total_price) / Number(this.props.row.total_member))} </div>
                            <div>모집 현황 : {this.props.row.join_profile_list.length}/{this.props.row.total_member}</div>
                            <div className = "join_btn_wraper">
                                <button  onClick={this.handleJoin}>함께하기</button>
                            </div>
                        </span>
                    </div>
                </div>  
            </li>
        ); 
    } 
}

export default BuyTogetherItem;