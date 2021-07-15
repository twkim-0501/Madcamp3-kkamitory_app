import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

const { Kakao } = window;

class KakaoLogout extends Component {
  state = {
    isLogin: true,
  };
  logoutWithKakao = () => {
    if (Kakao.Auth.getAccessToken()) {
      console.log(
        '카카오 인증 액세스 토큰이 존재합니다.',
        Kakao.Auth.getAccessToken(),
      );
      Kakao.Auth.logout(() => {
        console.log('로그아웃 되었습니다.', Kakao.Auth.getAccessToken());
        this.setState({
          isLogin: false,
        });
        localStorage.clear();
        this.props.history.push('/');
      });
    }
  };
  componentDidMount() {
    if (Kakao.Auth.getAccessToken()) {
      this.setState({
        isLogin: false,
      });
    }
  }

  render() {
    const { isLogin } = this.state;
    const logoutView = (
      <button onClick={this.logoutWithKakao}>
        <h2>로그아웃</h2>
      </button>
    );

    return <div className="App">{logoutView}</div>;
  }
}

export default withRouter(KakaoLogout);