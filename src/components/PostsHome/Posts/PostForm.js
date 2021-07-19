import React, {Component} from 'react';
class PostForm extends Component {
    componentDidMount(){
        let selectedBoard = this.props.selectedBoard;
        if(selectedBoard._id!=undefined){
            console.log("modify post");
            this.brdtitle.value = selectedBoard.brdtitle; 
            this.hashtag.value = selectedBoard.hashtag;
            this.brdcontent.value = selectedBoard.brdcontent;
        }
        else{
            console.log("new post");
            this.brdtitle.value = ""; 
            this.hashtag.value = "";
            this.brdcontent.value = "";
        }
    }

    handleSubmit = (e) => { //Posts.js의 handleSaveData에 저장되어있음.
        e.preventDefault();
        let selectedBoard = this.props.selectedBoard; 
        let data = { 
            brdtitle: this.brdtitle.value,
            brdcontent:this.brdcontent.value.replace(/\n/g, '<br />'),
            hashtag: this.hashtag.value
        }
        
        if (selectedBoard._id) { 
            data._id = selectedBoard._id
        }

        this.props.onSaveData(data);
    }

    backBtnClicked = () => {
        this.props.onBackButtonClicked();
    }

    render(){
        return(
            <form  name = "post_upload" class = "post_form_box" onSubmit={this.handleSubmit}> 
                <input class = "post_form_box_category" placeholder="title" ref={node => this.brdtitle = node}/>
                <input class = "post_form_box_category" placeholder="hashtag" ref={node => this.hashtag = node}/>
                <input hidden="hidden" />
                <input class = "post_form_box_category form_brdcontent" placeholder="brdcontent" ref ={node => this.brdcontent = node}/>
                <button type="submit">Save</button> 
                <button type="back" onClick = {this.backBtnClicked}>cancel</button> 
            </form>
        );  
    }
}

export default PostForm;