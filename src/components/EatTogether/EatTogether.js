import React, {Component} from 'react';
import EatTogetherItem from './EatTogetherItem.js'

class EatTogether extends Component {
    state = {
      eat_boards: [
        {
            _id: 1,
            brdwriter: 'Lee SunSin',
            menu: '화끈이 불닭 ',
            brddate: new Date(),
            brdcontent : "실속세트 매운맛으로 시켜드실분"
        },
        {
            _id: 2,
            brdwriter: 'So SiNo',
            brdtitle: 'bhc뿌링클',
            brddate: new Date(),
            brdcontent : "뿌링클 + 뿌링치즈볼 조합으로"
        }
      ],
      selectedBoard:{}
    }
    
  render(){
    const { eat_boards , selectedBoard } = this.state;
    return (
      <div>
          <h3 class= "page_title">
              <img class = "main_img" src= "/img/delivery.png"></img>
              <em class="main_text">
                  배달팟모으기
              </em>
              <span class="detail_text">
                  오늘의 밥친구
              </span>
          </h3> 
          
          <ul id = "postsList">
          { 
                      eat_boards.map(row => 
                          (<EatTogetherItem key={row._id} row={row} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow}/>) 
                      )
                  } 
          </ul>
      </div>
    );
  }
}
export default EatTogether;