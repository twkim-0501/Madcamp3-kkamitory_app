import React, {Component} from 'react';
// ㄴ
class PostDetail extends Component {
    backBtnClicked = () => {
        this.props.onBackButtonClicked();
    }

    render(){
        return(
            <div class = "eatpost_detail_box" onSubmit={this.handleSubmit}>
                <div className = "brdtitle post_detail_content">{this.props.selectedBoard.brdtitle}</div>  
                <div className = "brdcontent post_detail_content">{this.props.selectedBoard.brdcontent}</div> 
                <div className = "hashtag post_detail_content content_number">{this.props.selectedBoard.total_member}명 모집중</div>
                <button className = "okay_button" onClick = {this.backBtnClicked}>OK</button> 
            </div>
        );  
    }
}
export default PostDetail;