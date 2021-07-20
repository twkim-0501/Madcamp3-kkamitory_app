import React from 'react';
import "./Mypage.css"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
class MyPage extends React.Component {
  state = {
    nickname: 0,
    profile_image: "",
    kakaoID: "",
    gender: "",
    age_range: "",
  };
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
          kakaoID: id,
          gender: profile.gender,
          age_range: profile.age_range,
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };
  render() {
    const {nickname, profile_image} = this.state;
    return(
      <div class="mypagebox">
        <h3 className= "page_title">
                        <img className = "main_img" src= "/img/house.png"></img>
                        <em className="main_text">
                            내 정보 확인
                        </em>
                        <span className="detail_text">
                            로그인 정보 확인하기
                        </span>
                    </h3> 
        <div class="wrap_kaccount">
          <div class="box_manage">
            <strong class="tit_manage">프로필</strong>
            <p class="desc_comm desc_manage">KKAMITORY 웹은 카카오 계정으로 이용하실 수 있습니다.</p>
            <a href="https://accounts.kakao.com/weblogin/account/profile" class="link_set link_profile">
              <div class="info_kaccount">
                <span class="info_kaccount">
                  <div class="thumb_profile">
                    <img src={profile_image} class="img_profile" alt="프로필사진"/>
                    <span class="img_frame"></span>
                  </div>
                  <span class="txt_set"><ArrowForwardIosIcon fontSize="small" color="disabled"/></span>
                  <span class="txt_accounts">{nickname}</span>
                </span>
                
              </div>
            </a>
          </div>
          <div class="box_manage">
            <strong class="tit_manage">로그인 정보</strong>
            <p class="desc_comm desc_manage">KKAMITORY 유저의 정보입니다.</p>
            <a href="https://accounts.kakao.com/weblogin/account/info/email" class="link_set">
              <strong class="tit_set">이메일</strong>
              <span class="txt_set"><ArrowForwardIosIcon fontSize="small" color="disabled"/></span>
            </a>
          </div>
          <div class="box_manage">
            <strong class="tit_manage">바로가기</strong>
            <a href="http://localhost:3000/posts" class="link_set">
              게시물 작성하러 가기
              <span class="txt_set"><ArrowForwardIosIcon fontSize="small" color="disabled"/></span>
            </a>
            <a href="http://localhost:3000/reserve" class="link_set">
              세탁기 예약 현황 보러 가기
              <span class="txt_set"><ArrowForwardIosIcon fontSize="small" color="disabled"/></span>
            </a>
            <a href="http://localhost:3000/report" class="link_set">
              신고 내용 보러 가기
              <span class="txt_set"><ArrowForwardIosIcon fontSize="small" color="disabled"/></span>
            </a>
          </div>
        </div>
      </div>
      
    );
  }
}
export default MyPage;