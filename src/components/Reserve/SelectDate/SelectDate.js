import React, {Component} from 'react';
import '../Reserve.css'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import OneDate from './OneDate';

class SelectDate extends Component {

    render(){
        return(
            <div class="area_reservePage area_date">
                    <strong class="title_area"><CalendarTodayIcon fontSize="small"/>날짜 선택</strong>
                    <div class="group_day">
                        <div class="cover_day">
                            <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
                                <div class="swiper-wrapper">
                                    <OneDate day="토" date={17} isToday={true}/>
                                    <OneDate day="일" date={18} isToday={false}/>
                                    <OneDate day="월" date={19} isToday={false}/>
                                    <OneDate day="화" date={20} isToday={false}/>
                                    <OneDate day="수" date={21} isToday={false}/>
                                    <OneDate day="목" date={22} isToday={false}/>
                                    <OneDate day="금" date={23} isToday={false}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default SelectDate;