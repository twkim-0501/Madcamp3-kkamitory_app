import React from 'react';
import Button from '@material-ui/core/Button';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import axios from "axios";
import DialogTitle from '@material-ui/core/DialogTitle';

class Loginbtn extends React.Component {
    state = {
        loginResult: false,// 로그인 여부에 따라 페이지를 편집하기 위해 추가
        alertlogout: false,
  };
    componentDidMount() {
        if (window.Kakao.Auth.getAccessToken()) {
            this.setState({loginResult: true});
        }
        else{
            this.setState({loginResult: false});
        }
    };
    handleClickOpen = () => {
        this.setState({alertlogout: true});
    };
    handleClose = () => {
        this.setState({alertlogout: false});
    };


    handleLogin = () => {
    const scope = "profile_nickname, profile_image"; 
    const home = this;
    let loginResult = false;
    window.Kakao.Auth.login({
        scope,
        success: function (response) {
          window.Kakao.Auth.setAccessToken(response.access_token);
          console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);
          loginResult = true;
          home.setState({ loginResult });

          window.Kakao.API.request({
            url: "/v2/user/me",
            success: function ({ id, kakao_account }) {
                const { profile } = kakao_account;
                // 수집한 사용자 정보로 페이지를 수정하기 위해 setState
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

        },
        fail: function (error) {
          console.log(error);
        },
      });
    
  }
  handleLogout = () => {
    if (window.Kakao.Auth.getAccessToken()) {
        window.Kakao.Auth.logout(() => {
            console.log('로그아웃 되었습니다.', window.Kakao.Auth.getAccessToken());
            this.setState({
              loginResult: false,
              alertlogout: false,
            });
            localStorage.clear();
          });
    }
  }

  render() {
    const jsKey = "f486e195f10981eaa578efffee17ea1e";
    const {loginResult, alertlogout} = this.state;
    console.log(this.state.loginResult);
    if (!window.Kakao.isInitialized()) {
        // JavaScript key를 인자로 주고 SDK 초기화
        window.Kakao.init(jsKey);
        // SDK 초기화 여부를 확인하자.
        console.log(window.Kakao.isInitialized());
      }
    return(
        <div>
        {
            loginResult ?
            <Button variant="contained" color="default" startIcon={<ExitToAppIcon/>} onClick={this.handleClickOpen}>Logout</Button> :
            <Button variant="contained" color="default" startIcon={<VpnKeyIcon/>} onClick={this.handleLogin}>Login</Button>
        }
        <Dialog
        open={alertlogout}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"KKAMITORY에서 로그아웃 하시겠습니까?"}</DialogTitle>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    취소
                </Button>
                <Button onClick={this.handleLogout} color="primary" autoFocus>
                    확인
                </Button>
            </DialogActions>
        </Dialog>
        </div>
        
    );
  }
}
export default Loginbtn;