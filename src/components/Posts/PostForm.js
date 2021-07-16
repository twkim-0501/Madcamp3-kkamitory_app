import React, {Component} from 'react';
class PostForm extends Component { 
    
    shouldComponentUpdate(nextProps, nextState) { 
        let selectedBoard = nextProps.selectedBoard; 
        if (!selectedBoard._id) { 
            this.brdtitle.value = ""; 
            this.brdwriter.value = ""; 
            this.hashtag.value = "";
            this.brdcontent.value = "";
            return true; 
        } 
        this.brdtitle.value = selectedBoard.brdtitle; 
        this.brdwriter.value = selectedBoard.brdwriter; 
        this.hashtag.value = selectedBoard.hashtag;
        this.brdcontent.value = selectedBoard.brdcontent;
        return true; 
    }

    handleSubmit = (e) => { //Posts.js의 handleSaveData에 저장되어있음.
        e.preventDefault();
        //console.log(selectedBoard);
        let selectedBoard = this.props.selectedBoard; 
        let data = { 
            //brdwriter: this.brdwriter.value, 
            brdtitle: this.brdtitle.value,
            brdcontent:this.brdcontent.value,
            hashtag: this.hashtag.value
        }
        
        if (selectedBoard._id) { 
            data._id = selectedBoard._id
            //data.brddate = selectedBoard.brddate 
            //data.hashtag = selectedBoard.hashtag
            //data.brdcontent=selectedBoard.brdcontent
        }

        this.props.onSaveData(data);
    }

    backBtnClicked = () => {
        this.props.onBackButtonClicked();
    }

    render(){
        return(
            <form  class = "post_form_box" onSubmit={this.handleSubmit}> 
                <input class = "post_form_box_category" placeholder="title" ref={node => this.brdtitle = node}/>
                <input class = "post_form_box_category" placeholder="name" ref={node => this.brdwriter = node}/>
                <input class = "post_form_box_category" placeholder="hashtag" ref={node => this.hashtag = node}/>
                <input class = "post_form_box_category form_brdcontent" placeholder="brdcontent" ref ={node => this.brdcontent = node}/>
                <button type="submit">Save</button> 
                <button type="back" onClick = {this.backBtnClicked}>cancel</button> 
            </form>
        );
    }
}

export default PostForm;