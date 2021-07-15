import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


const { Kakao } = window;

class KakaoLogin extends Component {
  state = {
    isLogin: false,
  };
  
  loginWithKakao = () => {
    try {
      return new Promise((resolve, reject) => {
        if (!Kakao) {
          reject('인스턴스 없음');
        }
        Kakao.Auth.login({
          success: res => {
            localStorage.setItem('token', res.token);
            this.setState({
              isLogin: true,
            });
            this.props.history.push('/main');
          },
          fail: err => {
            console.error(err);
          },
        });
      });
    } catch (err) {
      console.error(err);
    }
  };
  componentDidMount() {
    if (Kakao.Auth.getAccessToken()) {
      this.setState({
        isLogin: true,
      });
    }
  }
  render() {
    const { isLogin } = this.state;
    const loginView = <button type= "button" id="kakao-login-btn" onClick={this.loginWithKakao} >
         <h2>로그인</h2>
    </button>;

    return <div className="App">{loginView}</div>;
  }
}

export default withRouter(KakaoLogin);