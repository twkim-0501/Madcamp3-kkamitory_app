import React, {Component} from 'react';
import Navigation from './components/nav';
import Mainpage from './components/Main/Mainpage';
import Loginpage from './components/LoginPage/Loginpage';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import KakaoLogout from './components/LoginPage/KakaoLogout';
import './App.css';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Loginpage/>
          </Route>
          <Route exact path="/main">
            <Mainpage/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
