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
            username: "",
            selectDate: 0,
            selectTime: "",
            selectWasher: 0,
            dormitory: ""
        }
    }
    componentDidMount(){
        axios.get(`/api/user/${this.props.kakaoID}`)
        .then(response => {
            this.setState({username: response.data.nickname
                ,dormitory: response.data.dormitory});
        });
    }
    handleSave = () => {
        const {username, selectDate, selectTime, selectWasher, dormitory}=this.state;
        axios.post(`/api/reserve/add`,{
            reserve_date: selectDate,
            reserve_user: username,
            dormitory: dormitory,
            washer_no: selectWasher,
            reserve_time: selectTime,
            user_ID: this.props.kakaoID
        })
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
        return (

            <body>
                <ReserveInfo kakaoID={kakaoID}/>
                <SelectDate handleDate={this.handleDate}/>
                <SelectWasher handleTime={this.handleTime}/>
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
