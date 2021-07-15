import React, {Component} from "react";
import Navigation from '../nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import KakaoLogout from '../LoginPage/KakaoLogout';
class Mainpage extends Component {
    render(){
        return (
            <BrowserRouter>
                <Navigation/>
                <Switch>
                    <Route exact path="/main">
                        <div><KakaoLogout/></div>
                    </Route>
                    <Route exact path="/posts">
                        <div>Posts</div>
                    </Route>
                    <Route exact path="/report">
                        <div>Report</div>
                    </Route>
                    <Route exact path="/reserve">
                        <div>Reserve</div>
                    </Route>
                </Switch>
            </BrowserRouter>
            
        );
    }
}

export default Mainpage;