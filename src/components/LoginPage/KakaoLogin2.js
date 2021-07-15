import React, { Component } from "react";

class KakaoLogin2 extends Component {
    componentDidMount() {
        const kakaoScript = document.createElement("script");
        kakaoScript.src = "https://developers.kakao.com/sdk/js/kakao.min.js";
        document.head.appendChild(kakaoScript);

        kakaoScript.onload = () => {
            window.Kakao.init("f486e195f10981eaa578efffee17ea1e");
            window.Kakao.Auth.createLoginButton({
                container: "#kakao-login-btn",
                success: (auth) => {
                    console.log("Kakao 로그인 성공", auth);

                    window.Kakao.API.request({
                        uri: "/v2/user/me",
                        success: (res) => {
                            console.log("Kakao 사용자 정보", res);
                        },
                        fail: (err) => {
                            console.log(err);
                        },
                    });
                },
                fail: (err) => {
                    console.log(err);
                },
            });
        };
    }

    render() {
        return <button type= "button" id="kakao-login-btn"></button>
    }
}

export default KakaoLogin2;