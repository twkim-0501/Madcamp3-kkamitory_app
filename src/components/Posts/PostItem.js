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

    render() { 
        return( 
            <li>
                <div class = "div-box">
                    <div class = "postItem">
                        <span class = "wrap_content">
                            <span class = "info_text">
                                <div class="box">
                                    <img class="profile" src="img/profile-example.jpg"></img>
                                </div>
                                <div class="name">
                                <a>{this.props.row.brdwriter}</a>
                                </div>
                                
                            </span>
                            <div class = "title_text">
                                <strong onClick={this.handleSelectRow}>{this.props.row.brdtitle}</strong>
                                <button onClick={this.handleRemove}>X</button>
                            </div>
                            <span class = "hashtag_text">
                                <a>{this.props.row.hashtag}</a>
                            </span>
                        </span>
                    </div>
                </div>  
            </li>
        ); 
    } 
}

export default PostItem;