import React, {Component} from 'react';
import './Reserve.css'
import axios from "axios";
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

class ReserveInfo extends Component {
    state = {
        json: {},
        reservable: true,
        reserveInfo: {}
    }
    componentDidUpdate(prevProps){
        if(this.props.reservable !== prevProps.reservable){
            this.componentDidMount();
            //this.setState({reservable: this.props.reservable})
        }
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
                axios.get(`/api/reserve/myreserve/${id}`)
                .then(response => {
                    if(response.data.length >= 1){
                        GetID.setState({reservable: false, reserveInfo: response.data[0]});
                    }
                    else{
                        GetID.setState({reservable: true});
                    }
                    
                })
            }
    },
    fail: function (error) {
        console.log(error);
    },
    });
    
    }
    render(){
        const { reservable,reserveInfo} = this.state;
        const {reserve_date,reserve_time,washer_no} = reserveInfo;
        return(
            <div class= "area_reservePage">
                <h2 class="title_subpage">예약 정보</h2>
                <div class="group_info">
                    <span class = "title_info">가능 여부:</span>
                    <div class="item_info">
                        {
                            reservable ?
                            <span class = "txt_item">가능</span> :
                            <span class = "txt_item">불가능</span>
                        }
                    </div>
                </div>
                <div class="group_info">
                    <span class = "title_info">예약 현황:</span>
                    <div class="item_info">
                        {
                            reservable ?
                            <span class = "txt_item">-</span> :
                            <span class = "txt_item">{reserve_date}일 {reserve_time}에 {washer_no}번 세탁기로 예약됨</span>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ReserveInfo;