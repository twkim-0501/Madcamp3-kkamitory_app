import React, {Component} from 'react';
import './PostDetail.css'
class PostDetail extends Component {
    backBtnClicked = () => {
        this.props.onBackButtonClicked();
    }

    render(){
        console.log("detail view");
        return(
            <div class = "post_detail_box" onSubmit={this.handleSubmit}>
                <div className = "brdtitle post_detail_content">{this.props.selectedBoard.brdtitle}</div> 
                <div className = "hashtag post_detail_content">{this.props.selectedBoard.hashtag}</div> 
                <div className = "brdcontent post_detail_content">{this.props.selectedBoard.brdcontent}</div> 
                <button className = "okay_button" onClick = {this.backBtnClicked}>OK</button> 
            </div>
        );  
    }
}
export default PostDetail;