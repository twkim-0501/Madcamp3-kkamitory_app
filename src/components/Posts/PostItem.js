import React, {Component} from 'react';
class PostItem extends Component { 
    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row.brdno);
    }    
    
    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }    

    render() { 
        return( 
            <li>
                <div class = "postItem">
                    <span class = "wrap_content">
                        <span class = "info_text">
                            <a>{this.props.row.brdno}</a>
                            <a>{this.props.row.brdwriter}</a>
                        </span>
                        <a class = "title_text">
                            <strong onClick={this.handleSelectRow}>{this.props.row.brdtitle}</strong>
                            <button onClick={this.handleRemove}>X</button>
                        </a>
                        <span class = "hashtag_text">
                            <a>#tag1 #tag2 #tag3</a>
                        </span>
                    </span>
                    
                </div>
                
            </li>
        ); 
    } 
}

export default PostItem;