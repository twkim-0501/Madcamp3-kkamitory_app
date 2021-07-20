import React, {Component} from 'react';
import Home from './components/Main/Main.js'
import Navigation from './components/nav';
import Login from './components/LoginPage/Login';
import Reserve from './components/Reserve/Reserve';
import ReportHome from './components/Report/ReportHome.js'
import PostsHome from './components/PostsHome/PostsHome.js'
import MyPage from './components/MyPage/MyPage.js'
import Footer from './components/footer.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Button from '@material-ui/core/Button';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import Loginbtn from './components/LoginPage/Loginbtn';
import './App.css';

class App extends Component {
  state = {
    dormitory: '',
    kakaoID: ''
  };
  getInfo = (dorm, kakaoID) => {
    this.setState({dormitory: dorm,
    kakaoID: kakaoID});
  }

  componentDidMount(){
    const GetID = this;
    window.Kakao.API.request({
      url: "/v2/user/me",
      success: function ({ id }) {
        GetID.setState({
          kakaoID: id
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  render(){
    const {kakaoID} = this.state;
    console.log(kakaoID);
    return (
      <div>
        <BrowserRouter>
        <Navigation/>
        <article class="content-article" >
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/posts">
              <PostsHome kakaoID = {kakaoID} />
            </Route>
            <Route exact path="/report">
              <ReportHome kakaoID={kakaoID}/>
            </Route>
            <Route exact path="/reserve">
              <Reserve kakaoID = {kakaoID}/>
            </Route>
            <Route exact path="/login">
              <MyPage/>
              {/* <Login getInfo = {this.getInfo}/> */}
            </Route>
          </Switch>
        </article>
        <Footer/>
      </BrowserRouter>
      <div class="loginbtn"><Loginbtn/></div>
      </div>
      
    );
  }
}
export default App;