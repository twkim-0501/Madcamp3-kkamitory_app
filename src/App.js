import React, {Component} from 'react';
import Navigation from './components/nav';
import Login from './components/LoginPage/Login';
import Reserve from './components/Reserve/Reserve';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import PostsHome from './components/PostsHome/PostsHome.js'

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <Navigation/>
        <article class="content-article">
          <Switch>
            <Route exact path="/">
              <div>main</div>
            </Route>
            <Route path="/posts">
              <PostsHome/>
            </Route>
            <Route exact path="/report">
              <div>report</div>
            </Route>
            <Route exact path="/reserve">
              <Reserve/>
            </Route>
            <Route exact path="/login">
              <Login/>
            </Route>
          </Switch>
        </article>
      </BrowserRouter>
    );
  }
}
export default App;