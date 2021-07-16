import React, {Component} from 'react';
import '../Reserve.css'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Washer from './Washer';
class SelectWasher extends Component {

    render(){
        return(
            <div class="area_reservePage">
                    <strong class="title_area"><LocalLaundryServiceIcon />세탁기 선택</strong>
                    <Washer washername ="세탁기1"/>
                    <Washer washername ="세탁기2"/>
                    <Washer washername ="세탁기3"/>
                    <Washer washername ="세탁기4"/>
                    <Washer washername ="세탁기5"/>
                </div>
        );
    }
}

export default SelectWasher;