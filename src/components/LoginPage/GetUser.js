import React from "react";
import "./GetUser.css"
import SelectDorm from "./SelectDorm";
import axios from "axios";

class GetUser extends React.Component {
  // 사용자 정보를 가져온다면 갱신한다.
  state = {
    nickname: 0,
    profile_image: "",
    kakaoID: ""
  };

  getInfo = () => {
    this.props.getInfo(this.state.kakaoID);
  }


  componentDidMount(){
    const GetUser = this;
    // login함수와 비슷하다. 사용자 정보를 가져오면 success콜백
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: function ({ id, kakao_account }) {
        const { profile } = kakao_account;
        // 수집한 사용자 정보로 페이지를 수정하기 위해 setState
        GetUser.setState({
          nickname: profile.nickname,
          profile_image: profile.profile_image_url,
          kakaoID: id
        });

        axios.post(`/api/user/login/`, {
          nickname: profile.nickname,
          profile_image: profile.profile_image_url,
          kakaoID: id
        })
        
      },
      fail: function (error) {
        console.log(error);
      },
    });

  };

  handleChange = (event) => {
    this.setState({dormitory: event.target.value});
  };
  handleSave = () => {
    console.log(this.state.dormitory);
    axios.post(`/api/user/login/`, {
      nickname: this.state.nickname,
      profile_image: this.state.profile_image,
      kakaoID: this.state.kakaoID,
      dormitory: this.state.dormitory
    })
    this.props.getInfo(this.state.dormitory, this.state.kakaoID);
  }

  render() {
    const { nickname, profile_image } = this.state;
    
    return (
      <div>
        <h1>{nickname ? nickname : "" }</h1>
        <img src={profile_image} class="profile_img" alt="profile_img" title="img_title" />
        <div>
          <SelectDorm getInfo={this.getInfo}/>
          <button onClick={this.handleSave}>Save</button>
        </div>
        
      </div>
    );
  }
}

export default GetUser;