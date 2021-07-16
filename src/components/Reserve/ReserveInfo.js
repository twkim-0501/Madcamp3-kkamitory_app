import React, {Component} from 'react';
import './Reserve.css'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

class ReserveInfo extends Component {

    render(){
        return(
            <div class= "area_reservePage">
                <h2 class="title_subpage">예약 정보</h2>
                <div class="group_info">
                    <span class = "title_info">기숙사:</span>
                    <div class="item_info">
                        <span class = "txt_item">소망관</span>
                    </div>
                </div>
                <div class="group_info">
                    <span class = "title_info">가능 여부:</span>
                    <div class="item_info">
                        <span class = "txt_item">가능</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReserveInfo;