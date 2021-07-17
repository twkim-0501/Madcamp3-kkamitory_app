import React, {Component} from 'react';
import '../Reserve.css'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Washer from './Washer';
class SelectWasher extends Component {

    render(){
        const {handleTime} = this.props;
        return(
            <div class="area_reservePage">
                    <strong class="title_area"><LocalLaundryServiceIcon />세탁기 선택</strong>
                    <Washer washername ="세탁기1" washerno={1} handleTime={handleTime}/>
                    <Washer washername ="세탁기2" washerno={2} handleTime={handleTime}/>
                    <Washer washername ="세탁기3" washerno={3} handleTime={handleTime}/>
                    <Washer washername ="세탁기4" washerno={4} handleTime={handleTime}/>
                    <Washer washername ="세탁기5" washerno={5} handleTime={handleTime}/>
                </div>
        );
    }
}

export default SelectWasher;