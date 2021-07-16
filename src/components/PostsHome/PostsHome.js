import React, {Component} from 'react';
import { BrowserRouter, Route, Switch , Link} from "react-router-dom";
import Posts from '../Posts/Posts.js'
import BuyTogether from '../BuyTogether/BuyTogether.js'
import EatTogether from '../EatTogether/EatTogether.js'
import './PostsHome.css'

class PostsHome extends Component {

  render(){
    return (
      <div>
        <div class = "list_tab_wrap">
                <ul class="list_tab">
                    <li class="post_board_btn"><Link to="/posts/" class="post_board_name">자유게시판</Link></li>
                    <li class="post_board_btn"><Link to="/posts/eat_together" class="post_board_name">배달팟 모으기</Link></li>
                    <li class="post_board_btn"><Link to="/posts/buy_together" class="post_board_name">공구하기</Link></li>
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