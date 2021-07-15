import React, {Component} from 'react';
import Navigation from './components/nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';

class App extends Component {

  render(){
    return (
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route exact path="/">
            <div>main</div>
          </Route>
          <Route exact path="posts">
            <div>Posts</div>
          </Route>
          <Route exact path="report">
            <div>Report</div>
          </Route>
          <Route exact path="reserve">
            <div>Reserve</div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
