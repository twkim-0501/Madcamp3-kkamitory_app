import React, {Component} from 'react';
import EatTogetherItem from './EatTogetherItem.js'
import './EatTogether.css'

class EatTogether extends Component {
    state = {
      profile : "",
      nickname : "",
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

    componentDidMount(){
      const GetUser = this;

      window.Kakao.API.request({
          url: "/v2/user/me",
          success: function ({ kakao_account }) {
            const { profile } = kakao_account;
            // 수집한 사용자 정보로 페이지를 수정하기 위해 setState
            GetUser.setState({
              nickname: profile.nickname,
              profile: profile.profile_image_url,
            });
            console.log(GetUser.state.profile);
          },
          fail: function (error) {
            console.log(error);
          },
        });
    }
   
    
  render(){
    const { eat_boards , selectedBoard } = this.state;
    console.log(this.profile);
    return (
      <div>
          <h3 class= "page_title">
              <img class = "main_img" src= "/img/delivery.png"></img>
              <em class="main_text">
                  배달팟 모으기
              </em>
              <span class="detail_text">
                  오늘의 밥 친구
              </span>
          </h3> 
          
          <ul id = "postsList">
          { 
                      eat_boards.map(row => 
                          (<EatTogetherItem key={row._id} row={row} onRemove={this.handleRemove} profile = {this.state.profile} onSelectRow={this.handleSelectRow}/>) 
                      )
                  } 
          </ul>
      </div>
    );
  }
}
export default EatTogether;

