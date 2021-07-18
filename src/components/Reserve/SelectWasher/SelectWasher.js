import React, {Component} from 'react';
import '../Reserve.css'
import LocalLaundryServiceIcon from '@material-ui/icons/LocalLaundryService';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import Washer from './Washer';
class SelectWasher extends Component {
    /*
    componentDidUpdate(prevProps){
        
        if(this.props.reservable !== prevProps.reservable){
            this.render();
        }
    }*/
    render(){
        const {handleTime,selectDate, reserveInfos} = this.props;
        //console.log(reserveInfos);
        return(
            <div class="area_reservePage">
                    <strong class="title_area"><LocalLaundryServiceIcon />세탁기 선택</strong>
                    <Washer washername ="세탁기1" washerno={1} handleTime={handleTime} selectDate={selectDate} reserveInfos={reserveInfos}/>
                    <Washer washername ="세탁기2" washerno={2} handleTime={handleTime} selectDate={selectDate} reserveInfos={reserveInfos}/>
                    <Washer washername ="세탁기3" washerno={3} handleTime={handleTime} selectDate={selectDate} reserveInfos={reserveInfos}/>
                    <Washer washername ="세탁기4" washerno={4} handleTime={handleTime} selectDate={selectDate} reserveInfos={reserveInfos}/>
                    <Washer washername ="세탁기5" washerno={5} handleTime={handleTime} selectDate={selectDate} reserveInfos={reserveInfos}/>
                </div>
        );
    }
}

export default SelectWasher;