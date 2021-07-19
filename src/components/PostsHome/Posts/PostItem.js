import React, {Component} from 'react';
class PostItem extends Component { 
    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row._id);
    }    
    
    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }    

    handleDetailShow = () => {
        const {row, onDetailShow} = this.props;
        onDetailShow(row);
    }

    render() { 
        return( 
            <li>
                <div class = "div-box">
                    <div class = "postItem">
                        <span class = "wrap_content">
                            <span class = "info_text">
                                <div class="box">
                                    <img class="profile" src={this.props.row.profile}></img>
                                </div>
                                <div class="name">
                                <a>{this.props.row.brdwriter}</a>
                                </div>
                            </span>
                            <div class = "brd_title_text">
                                <strong onClick={this.handleDetailShow}>{this.props.row.brdtitle}</strong>
                                <button onClick={this.handleRemove}><img class = "xButton" src = "/img/xButton.png"></img></button>
                            </div>
                            <span class = "hashtag_text">
                                <a>{this.props.row.hashtag}</a> 
                            </span>
                            <div className = "modifyButton" onClick={this.handleSelectRow}>수정하기</div>
                        </span>
                    </div>
                </div>  
            </li>
        ); 
    } 
}

export default PostItem;