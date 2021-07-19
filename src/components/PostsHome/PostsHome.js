import React, {Component} from 'react';
import { BrowserRouter, Route, Switch , Link} from "react-router-dom";
import Posts from './Posts/Posts.js'
import BuyTogether from './BuyTogether/BuyTogether.js'
import EatTogether from './EatTogether/EatTogether.js'
import './PostsHome.css'

class PostsHome extends Component {

  constructor(props){
    super(props);
    this.state = {
      active : "post"
    }
  }

  componentWillUnmount() {
    this.setState({active:""});
  }

  pageList = ["post", "eat", "buy"];

  navClicked = (num) => {
    this.setState({active : this.pageList[num]});
  };

  render(){
    return (
      <div>
        <div class = "list_tab_wrap">
                <ul class="list_tab">
                    <li className = {this.state.active ==="post" ? "active_post_btn": "unactive_post_btn"}><Link to="/posts/" class="post_board_name" onClick= {() => this.navClicked(0)}>자유게시판</Link></li>
                    <li className = {this.state.active ==="eat" ? "active_post_btn": "unactive_post_btn"}><Link to="/posts/eat_together" class="post_board_name" onClick= {() => this.navClicked(1)}>배달팟 모으기</Link></li>
                    <li className = {this.state.active ==="buy" ? "active_post_btn": "unactive_post_btn"}><Link to="/posts/buy_together" class="post_board_name"onClick= {() => this.navClicked(2)}>공구하기</Link></li>
                </ul>
        </div>
        <Route path = "/posts/"  exact={true} component={Posts}/>
        <Route path = "/posts/eat_together"  exact={true} component={EatTogether}/>
        <Route path = "/posts/buy_together"  exact={true} component={BuyTogether}/>
      </div>

    );
  }
}
export default PostsHome;