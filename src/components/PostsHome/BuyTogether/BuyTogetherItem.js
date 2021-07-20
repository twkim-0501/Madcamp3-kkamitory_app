import React, {Component} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={3} variant="filled" {...props} />;
}
class BuyTogetherItem extends Component { 
    state = {
        alertwriter: false,
      }
    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row._id,row);
    }    
    
    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }    

    handleJoin = (e) => {
        e.preventDefault();
        let row = this.props.row; 
        let rowjoinlist = row.join_profile_list.map(member => member.profile_id);

        console.log(row.profile_id)
        console.log(this.props.kakao_id)
        if(row.profile_id == this.props.kakao_id){
            console.log("되면안됨")
            this.setState({alertwriter: true})
            return;
        }
        if(rowjoinlist.includes(this.props.kakao_id)){
            console.log("되면안됨")
            this.setState({alertwriter: true})
            return;
        }
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
    handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            alertwriter: false,
        });
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
                    <Snackbar open={this.state.alertwriter} autoHideDuration={3000} onClose={this.handleCloseAlert}>
                        <Alert onClose={this.handleCloseAlert} severity="warning">
                        중복 참가는 불가능합니다
                        </Alert>
                    </Snackbar>
                </div>  
            </li>
        ); 
    } 
}

export default BuyTogetherItem;