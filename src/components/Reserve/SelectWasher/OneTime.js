import React, {Component} from 'react';
import '../Reserve.css'
import axios from "axios"
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

class OneTime extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectTime: "",
            selectWasher: 0,
            isReserved: false,
            userInfo: {},
            selectDate: ""
        }
    }
    componentDidUpdate(prevProps,prevState){
        
        if(this.props.selectDate !== prevProps.selectDate){
            this.setState({selectDate: this.props.selectDate})
            console.log("here!"+this.props.selectDate);
            
            //console.log(this.state.userInfo.dormitory);
            
            axios.post(`/api/reserve/checkreserved`, {
                date: this.props.selectDate,
                washer: this.props.washername,
                time: this.props.time
            })
            .then(response => {
                this.setState({isReserved: response.data.isReserved});
            });
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
                        GetID.setState({userInfo: response.data})
                    });
                }
        },
        fail: function (error) {
            console.log(error);
        },
        });
    }

    handleTime = (e) => {
        this.setState({selectTime: e.target.value, selectWasher: this.props.washername});
        this.props.handleTime(this.props.washername, e.target.value);
    }
    render(){
        const { time, selectDate } = this.props;
        const { isReserved } = this.state;
        return(
            <div class="item_timeRadioTagList">
                {
                    isReserved==false ?
                    <input type="radio" name="selectreserve" class="item_radio" value={time} onChange={this.handleTime}/>
                    :
                    <input type="radio" name="selectreserve" class="item_radio reserved" value="마감" color="#ff695b"/>
                    //<div class="item_tag reserved">마감</div>
                }
                {
                    isReserved==false ?
                    <label class="item_label">{time}</label> :
                    //null
                    <label class="item_label reserved" color="#ff695b">마감</label> 
                }
            </div>
        );
    }
}

export default OneTime;