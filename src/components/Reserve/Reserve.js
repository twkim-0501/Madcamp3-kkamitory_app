import React, {Component} from 'react';
import axios from "axios";
import './Reserve.css'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ReserveInfo from './ReserveInfo';
import SelectDate from './SelectDate/SelectDate';
import SelectWasher from './SelectWasher/SelectWasher';
class Reserve extends Component {
    constructor(props){
        super(props);
        this.state = {
            kakaoID: "",
            username: "",
            selectDate: 0,
            selectTime: "",
            selectWasher: 0,
            dormitory: "",
            reservable: true
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(this.state.s !== prevProps.reservable){
            
        }
    }
    componentDidMount(){
        const GetID = this;
        window.Kakao.API.request({
            url: "/v2/user/me",
            success: function ({ id }) {
                GetID.setState({
                kakaoID: id
                });
                //id로 유저 정보 받아옴
                axios.get(`/api/user/${id}`)
                .then(response => { 
                    if(response.data.nickname && response.data.dormitory){
                    GetID.setState({username: response.data.nickname
                        ,dormitory: response.data.dormitory});
                    }
                    else{
                        console.log("기숙사나 유저네임이 null임");
                    }
                });
                //예약 가능여부 체크
                axios.get(`/api/reserve/myreserve/${id}`)
                .then(response => {
                    if(response.data.length > 2){
                        GetID.setState({reservable: false});
                    }
                    else{
                        GetID.setState({reservable: true});
                    }
                    
                })
            },
            fail: function (error) {
                console.log(error);
            },
        });
        
    }
    handleSave = () => {
        const {username, selectDate, selectTime, selectWasher, dormitory,reservable}=this.state;
        if(reservable){
            axios.post(`/api/reserve/add`,{
                reserve_date: selectDate,
                reserve_user: username,
                dormitory: dormitory,
                washer_no: selectWasher,
                reserve_time: selectTime,
                user_ID: this.props.kakaoID
            })
        }
        else{
            console.log("예약할 수 없음")
        }
        
    }
    getDorm = (dorm) => {
        this.setState({dormitory: dorm});
        console.log(dorm);
    }
    handleDate = (date) => {
        this.setState({selectDate: date});
        console.log("date is!!!: "+date);
    }
    handleTime = (selectWasher, selectTime ) => {
        this.setState({selectTime: selectTime, selectWasher: selectWasher});
        console.log(selectWasher, selectTime);
    }
    render() {
        const {kakaoID} = this.props;
        const {reservable,selectDate} = this.state;
        return (

            <body>
                <ReserveInfo kakaoID={kakaoID} reservable={reservable}/>
                <SelectDate handleDate={this.handleDate}/>
                <SelectWasher handleTime={this.handleTime} selectDate={selectDate}/>
                <div class="group_bottom_btn fixed">
                    <div class="item_bottom_btn">
                        <button type="button" class="btn_bottom_btn" onClick={this.handleSave}>
                            예약하기
                        </button>
                    </div>
                </div>
                
            </body>
        );
    }
}

export default Reserve;
