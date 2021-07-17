import React, {Component} from 'react';
import '../Reserve.css'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

class OneTime extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectTime: "",
            selectWasher: 0
        }
    }

    handleTime = (e) => {
        this.setState({selectTime: e.target.value, selectWasher: this.props.washername});
        this.props.handleTime(this.props.washername, e.target.value);
    }
    render(){
        const { time, washername } = this.props;
        return(
            <div class="item_timeRadioTagList">
                <input type="radio" name="selectreserve" class="item_radio" value={time} onChange={this.handleTime}/>
                <label class="item_label">{time}</label>
            </div>
        );
    }
}

export default OneTime;