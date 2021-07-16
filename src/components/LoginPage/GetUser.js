import React from "react";

class GetUser extends React.Component {
  // 사용자 정보를 가져온다면 갱신한다.
  state = {
    nickname: 0,
    profile_image_url: "",
  };

  componentDidMount(){
    const GetUser = this;

    // login함수와 비슷하다. 사용자 정보를 가져오면 success콜백
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: function ({ kakao_account }) {
        const { profile } = kakao_account;
        // 수집한 사용자 정보로 페이지를 수정하기 위해 setState
        GetUser.setState({
          nickname: profile.nickname,
          profile_image_url: profile.profile_image_url,
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  render() {
    const { nickname, profile_image_url } = this.state;

    return (
      <div>
        <h1>{nickname ? nickname : "" }</h1>
        <img src={profile_image_url} alt="profile_img" title="img_title" />
      </div>
    );
  }
}

export default GetUser;