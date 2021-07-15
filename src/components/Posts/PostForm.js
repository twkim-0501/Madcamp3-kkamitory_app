import React, {Component} from 'react';
class PostForm extends Component { 
    
    shouldComponentUpdate(nextProps, nextState) { 
        let selectedBoard = nextProps.selectedBoard; 
        if (!selectedBoard.brdno) { 
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
        let selectedBoard = this.props.selectedBoard; 
        let data = { 
            brdwriter: this.brdwriter.value, 
            brdtitle: this.brdtitle.value,
            brdcontent:this.brdcontent.value,
            hashtag: this.hashtag.value
        } 
        if (selectedBoard.brdno) { 
            data.brdno = selectedBoard.brdno 
            data.brddate = selectedBoard.brddate 
            data.hashtag = selectedBoard.hashtag
            data.brdcontent=selectedBoard.brdcontent
        } 
        this.props.onSaveData(data);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}> 
                <input placeholder="title" ref={node => this.brdtitle = node}/>
                <input placeholder="name" ref={node => this.brdwriter = node}/>
                <input placeholder="hashtag" ref={node => this.hashtag = node}/>
                <input placeholder="brdcontent" ref ={node => this.brdcontent = node}/>
                <button type="submit">Save</button> 
            </form>
        );
    }
}

export default PostForm;