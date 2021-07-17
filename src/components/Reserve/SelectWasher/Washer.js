import React, {Component} from 'react';
import '../Reserve.css'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import OneTime from './OneTime';
class Washer extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectTime: "",
            selectWasher: 0
        }
    }
    render(){
        const {washername, washerno, handleTime} = this.props;
        return(
            <div class="group_washer">
                        <div class="card_washer">
                            <strong class="washer">
                                {washername}
                            </strong>
                        </div>
                        <div class="bundle_timeRadioTagList">
                            <OneTime time="13:00" washername={washerno} handleTime={handleTime}/>
                            <OneTime time="14:00" washername={washerno} handleTime={handleTime}/>
                            <OneTime time="15:00" washername={washerno} handleTime={handleTime}/>
                            <OneTime time="16:00" washername={washerno} handleTime={handleTime}/>
                            <OneTime time="17:00" washername={washerno} handleTime={handleTime}/>
                            <OneTime time="18:00" washername={washerno} handleTime={handleTime}/>
                            <OneTime time="19:00" washername={washerno} handleTime={handleTime}/>
                            <OneTime time="20:00" washername={washerno} handleTime={handleTime}/>
                            <OneTime time="21:00" washername={washerno} handleTime={handleTime}/>
                        </div>
                    </div>
        );
    }
}

export default Washer;