import React, {Component} from 'react';
import '../Reserve.css'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import OneTime from './OneTime';
class Washer extends Component {

    render(){
        const {washername} = this.props;
        return(
            <div class="group_washer">
                        <div class="card_washer">
                            <strong class="washer">
                                {washername}
                            </strong>
                        </div>
                        <div class="bundle_timeRadioTagList">
                            <OneTime time="13:00"/>
                            <OneTime time="14:00"/>
                            <OneTime time="15:00"/>
                            <OneTime time="16:00"/>
                            <OneTime time="17:00"/>
                            <OneTime time="18:00"/>
                            <OneTime time="19:00"/>
                            <OneTime time="20:00"/>
                            <OneTime time="21:00"/>
                        </div>
                    </div>
        );
    }
}

export default Washer;