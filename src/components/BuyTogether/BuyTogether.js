import React, {Component} from 'react';
import BuyTogetherItem from './BuyTogetherItem'

class BuyTogether extends Component {
    state = {
      eat_boards: [
        {
            _id: 1,
            brdwriter: 'Lee SunSin',
            brditem: '애플펜슬 펜촉',
            brddate: new Date(),
            brdcontent : "2세대 펜촉 공구해요"
        },
        {
            _id: 2,
            brdwriter: 'So SiNo',
            brditem: '닭가슴살공구',
            brddate: new Date(),
            brdcontent : "같이다이어트해요"
        }
      ],
      selectedBoard:{}
    }
    
  render(){
    const { eat_boards , selectedBoard } = this.state;
    return (
      <div>
          <h3 class= "page_title">
              <img class = "main_img" src= "/img/conference.png"></img>
              <em class="main_text">
                  공구하기
              </em>
              <span class="detail_text">
                  함께라면 살수있어
              </span>
          </h3> 
          
          <ul id = "postsList">
          { 
                      eat_boards.map(row => 
                          (<BuyTogetherItem key={row._id} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow}/>) 
                      )
                  } 
          </ul>
      </div>
    );
  }
}
export default BuyTogether;