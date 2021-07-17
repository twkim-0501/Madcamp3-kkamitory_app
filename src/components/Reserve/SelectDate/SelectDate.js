import React, {Component} from 'react';
import '../Reserve.css'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import OneDate from './OneDate';

let daylist = ['일','월','화','수','목','금','토'];
class SelectDate extends Component {
    constructor(props){
        super(props);
        this.state = {
            date: [],
            days: [],
            selectDate: 0
        }
    }

    componentDidMount() {
        let today = new Date();
        let temp = new Date();
        let date = [];
        let days = [];
        for(var i = 0; i<=6 ; i++){
            temp.setDate(today.getDate()+i);
            date.push(temp.getDate());
            days.push(daylist[temp.getDay()]);
        }
        this.setState({date: date, days: days});
    }
    handleRadio= (date) => {
        this.setState({selectDate: date});
        this.props.handleDate(date);
    }
    render(){
        const {date,days}=this.state;
        return(
            <div class="area_reservePage area_date">
                    <strong class="title_area"><CalendarTodayIcon fontSize="small"/>날짜 선택</strong>
                    <div class="group_day">
                        <div class="cover_day">
                            <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
                                <div class="swiper-wrapper">
                                    <OneDate day={days[0]} date={date[0]} isToday={true} onSelect={this.handleRadio}/>
                                    <OneDate day={days[1]} date={date[1]} isToday={false} onSelect={this.handleRadio}/>
                                    <OneDate day={days[2]} date={date[2]} isToday={false} onSelect={this.handleRadio}/>
                                    <OneDate day={days[3]} date={date[3]} isToday={false} onSelect={this.handleRadio}/>
                                    <OneDate day={days[4]} date={date[4]} isToday={false} onSelect={this.handleRadio}/>
                                    <OneDate day={days[5]} date={date[5]} isToday={false} onSelect={this.handleRadio}/>
                                    <OneDate day={days[6]} date={date[6]} isToday={false} onSelect={this.handleRadio}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default SelectDate;