import React, {Component} from 'react';
import '../Reserve.css'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

class OneTime extends Component {
    
    render(){
        const { time } = this.props;
        return(
            <div class="item_timeRadioTagList">
                <input type="radio" name="reservation_time" class="item_radio"/>
                <label class="item_label">{time}</label>
            </div>
        );
    }
}

export default OneTime;