import React, {Component} from 'react';
import axios from "axios";
import './Reserve.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ReserveInfo from './ReserveInfo';
import SelectDate from './SelectDate/SelectDate';
import SelectWasher from './SelectWasher/SelectWasher';
import { ViewArraySharp } from '@material-ui/icons';


function Alert(props) {
    return <MuiAlert elevation={3} variant="filled" {...props} />;
}
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
            reservable: true,
            alertReserve: false,
            alertCancel: false,
            reserveInfo: {},
            reserveInfos: [],
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
                //모든 예약시간정보 리스트 가져오기(최적화용)
                axios.get(`/api/reserve/timelist`)
                .then(response => { 
                    GetID.setState({reserveInfos: response.data});
                });
                //예약 가능여부 체크
                axios.get(`/api/reserve/myreserve/${id}`)
                .then(response => {
                    if(response.data.length >= 1){
                        GetID.setState({reservable: false, reserveInfo: response.data[0]});
                    }
                    else{
                        GetID.setState({reservable: true, reserveInfo: {}});
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
        if(reservable && selectDate && selectTime){
            axios.post(`/api/reserve/add`,{
                reserve_date: selectDate,
                reserve_user: username,
                dormitory: dormitory,
                washer_no: selectWasher,
                reserve_time: selectTime,
                user_ID: this.props.kakaoID
            })
            //예약 가능여부 체크
            axios.get(`/api/reserve/myreserve/${this.state.kakaoID}`)
            .then(response => {
                this.setState({alertReserve: true});
                if(response.data.length >= 1){
                    this.setState({reservable: false});
                }
                else{
                    this.setState({reservable: true});
                }
            })
        }
        else{
            this.setState({alertCheck: true});
            console.log("예약할 수 없음")
        }
    }
    handleCancel = () => {
        const {kakaoID}= this.state;
        axios.post(`/api/reserve/cancel`, {kakaoID: kakaoID})
        .then(() => axios.get(`/api/reserve/myreserve/${this.state.kakaoID}`))
        .then(response => {
            this.setState({alertCancel: true});
            if(response.data.length >= 1){
                this.setState({reservable: false});
            }
            else{
                this.setState({reservable: true});
            }
        })
    }
    handleCloseAlert = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({
            alertReserve: false,
            alertCancel: false,
            alertCheck: false
        });
    }
    getDorm = (dorm) => {
        this.setState({dormitory: dorm});
        //console.log(dorm);
    }
    handleDate = (date) => {
        this.setState({selectDate: date});
        //console.log("date is!!!: "+date);
    }
    handleTime = (selectWasher, selectTime ) => {
        this.setState({selectTime: selectTime, selectWasher: selectWasher});
        //console.log(selectWasher, selectTime);
    }
    shouldCheck = (time) => {
        return this.state.reserveInfos.includes(time);
    }
    render() {
        const {kakaoID} = this.props;
        const {reservable,selectDate,reserveInfos,reserveInfo} = this.state;
        console.log(reserveInfos);
        console.log(this.shouldCheck("13:00"));
        return (
            <body>
                <ReserveInfo kakaoID={kakaoID}/>
                <SelectDate handleDate={this.handleDate}/>
                <SelectWasher handleTime={this.handleTime} selectDate={selectDate} reserveInfos={this.shouldCheck}/>
                <div class="group_bottom_btn fixed">
                    <div class="item_bottom_btn">
                        {
                            reservable ?
                            <button type="button" class="btn_bottom_btn" onClick={this.handleSave}>
                            예약하기
                            </button> :
                            <button type="button" class="btn_bottom_btn reserved" onClick={this.handleCancel}>
                            예약취소
                            </button>
                        }
                    </div>
                </div>
                <Snackbar open={this.state.alertReserve} autoHideDuration={2000} onClose={this.handleCloseAlert}>
                    <Alert onClose={this.handleCloseAlert} severity="success">
                    예약이 완료되었습니다
                    </Alert>
                </Snackbar>
                <Snackbar open={this.state.alertCancel} autoHideDuration={2000} onClose={this.handleCloseAlert}>
                    <Alert onClose={this.handleCloseAlert} severity="success">
                    예약이 취소되었습니다
                    </Alert>
                </Snackbar>
                <Snackbar open={this.state.alertCheck} autoHideDuration={2000} onClose={this.handleCloseAlert}>
                    <Alert onClose={this.handleCloseAlert} severity="warning">
                    선택하지 않은 항목이 존재합니다
                    </Alert>
                </Snackbar>
            </body>
            
        );
    }
}

export default Reserve;
