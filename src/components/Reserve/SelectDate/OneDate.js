import React, {Component} from 'react';
import '../Reserve.css'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

class OneDate extends Component {

    render(){
        const {day, date, isToday} = this.props;
        return(
            <div class="swiper-slide item_day">
                <input type="radio" name="radio_day" id="radio_day16" class="radio_item" value="16"/>
                <label class="label_item" for="radio_day_16">
                    <span class="name_item">{day}</span>
                    <span class="num_g">{date}</span>
                    {
                        isToday ?
                        <span class="txt_today">오늘</span> :
                        null
                    }
                </label>
            </div>
        );
    }
}

export default OneDate;