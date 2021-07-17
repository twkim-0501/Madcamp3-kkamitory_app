import React, {Component} from 'react';
import Navigation from './components/nav';
import Login from './components/LoginPage/Login';
import Reserve from './components/Reserve/Reserve';
import ReportHome from './components/Report/ReportStudent.js'
import PostsHome from './components/PostsHome/PostsHome.js'
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
      <BrowserRouter>
        <Navigation/>
        <article class="content-article" >
          <Switch>
            <Route exact path="/">
              <div>main</div>
            </Route>
            <Route path="/posts">
              <PostsHome kakaoID = {kakaoID}/>
            </Route>
            <Route exact path="/report">
              <ReportHome kakaoID={kakaoID}/>
            </Route>
            <Route exact path="/reserve">
              <Reserve kakaoID = {kakaoID}/>
            </Route>
            <Route exact path="/login">
              <Login getInfo = {this.getInfo}/>
            </Route>
          </Switch>
        </article>
      </BrowserRouter>
    );
  }
}
export default App;