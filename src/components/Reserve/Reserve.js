import React, {Component} from 'react';
import './Reserve.css'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ReserveInfo from './ReserveInfo';
import SelectDate from './SelectDate/SelectDate';
import SelectWasher from './SelectWasher/SelectWasher';
class Reserve extends Component {
    constructor(props){
        super(props);
        this.state = {
            temp: false
        }
    }
    
    render() {
        const {kakaoID} = this.props;
        return (

            <body>
                <ReserveInfo kakaoID={kakaoID}/>
                <SelectDate/>
                <SelectWasher/>
                <div class="group_bottom_btn fixed">
                    <div class="item_bottom_btn">
                        <button type="button" class="btn_bottom_btn">
                            예약하기
                        </button>
                    </div>
                </div>
                
            </body>
        );
    }
}

export default Reserve;