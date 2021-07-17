import React, {Component} from 'react';
class EatTogetherForm extends Component {
    componentDidMount(){
        let selectedBoard = this.props.selectedBoard;
        if(selectedBoard._id!=undefined){
            console.log("modify post");
            this.brdtitle.value = selectedBoard.brdtitle; 
            this.total_member.value = selectedBoard.total_member;
            this.brdcontent.value = selectedBoard.brdcontent;
        }
        else{
            console.log("new post");
            this.brdtitle.value = ""; 
            this.total_member.value = "";
            this.brdcontent.value = "";
        }
    }

    handleSubmit = (e) => { //Posts.js의 handleSaveData에 저장되어있음.
        e.preventDefault();
        let selectedBoard = this.props.selectedBoard; 
        let data = { 
            brdtitle: this.brdtitle.value,
            brdcontent:this.brdcontent.value,
            total_member: this.total_member.value
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
                <strong>무엇을 먹을까요?</strong>
                <input class = "post_form_box_category" placeholder="title" ref={node => this.brdtitle = node}/>
                <a>총 몇명을 모을까요?</a>
                <input class = "post_form_box_category" placeholder="total_member" ref={node => this.total_member = node}/>
                <a>세부내용을 입력해주세요</a>
                <input class = "post_form_box_category form_brdcontent" placeholder="brdcontent" ref ={node => this.brdcontent = node}/>
                <button type="submit">Save</button> 
                <button type="back" onClick = {this.backBtnClicked}>cancel</button> 
            </form>
        );  
    }
}

export default EatTogetherForm;