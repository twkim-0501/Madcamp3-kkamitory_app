import React, {Component} from 'react';
import './Reserve.css'
import axios from "axios";
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

class ReserveInfo extends Component {
    state = {
        json1: {}
    }
    componentDidMount(){
    const GetID = this;
    window.Kakao.API.request({
        url: "/v2/user/me",
        success: function ({ id }) {
            if(id){
                axios.get(`/api/user/${id}`)
                .then(response => {
                    GetID.setState({json1: response.data})
                });
            }
    },
    fail: function (error) {
        console.log(error);
    },
    });
        
        
    }
    render(){
        const {json1} = this.state;
        return(
            <div class= "area_reservePage">
                <h2 class="title_subpage">예약 정보</h2>
                <div class="group_info">
                    <span class = "title_info">기숙사:</span>
                    <div class="item_info">
                        {
                             json1.dormitory ?
                            <span class = "txt_item">{json1.dormitory}</span> :
                            null
                        }
                    </div>
                </div>
                <div class="group_info">
                    <span class = "title_info">가능 여부:</span>
                    <div class="item_info">
                        <span class = "txt_item">가능</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReserveInfo;