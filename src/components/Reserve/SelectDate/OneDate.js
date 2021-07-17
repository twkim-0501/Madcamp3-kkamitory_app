import React, {Component} from 'react';
import '../Reserve.css'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

class OneDate extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectDate: 0
        }
    }

    handleRadio = (e) => {
        this.setState({selectDate: e.target.value});
        this.props.onSelect(e.target.value);
    }
    render(){
        const {day, date, isToday} = this.props;
        return(
            <div class="swiper-slide item_day">
                <input type="radio" name="radio_day_name" id="radio_day16" class="radio_item" value={date}
                onChange={this.handleRadio}/>
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