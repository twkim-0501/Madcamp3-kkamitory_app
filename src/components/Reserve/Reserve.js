import React, {Component} from 'react';
import './Reserve.css'

class Reserve extends Component {
    constructor(props){
        super(props);
        this.state = {
            temp: false
        }
    }

    render() {
        return (

            <body>
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
                <div class="area_reservePage area_date">
                    <string class="title_area">날짜 선택</string>
                    <div class="group_day">
                        <div class="cover_day">
                            <div class="swiper-container swiper-container-initialized swiper-container-horizontal">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide item_day">
                                        <input type="radio" name="radio_day" id="radio_day16" class="radio_item" value="16"/>
                                        <label class="label_item" for="radio_day_16">
                                            <span class="name_item">토</span>
                                            <span class="num_g">17</span>
                                            <span class="txt_today">오늘</span>
                                        </label>
                                    </div>
                                    <div class="swiper-slide item_day">
                                        <input type="radio" name="radio_day" id="radio_day16" class="radio_item" value="16"/>
                                        <label class="label_item" for="radio_day_16">
                                            <span class="name_item">일</span>
                                            <span class="num_g">18</span>
                                        </label>
                                    </div>
                                    <div class="swiper-slide item_day">
                                        <input type="radio" name="radio_day" id="radio_day16" class="radio_item" value="16"/>
                                        <label class="label_item" for="radio_day_16">
                                            <span class="name_item">월</span>
                                            <span class="num_g">19</span>
                                        </label>
                                    </div>
                                    <div class="swiper-slide item_day">
                                        <input type="radio" name="radio_day" id="radio_day16" class="radio_item" value="16"/>
                                        <label class="label_item" for="radio_day_16">
                                            <span class="name_item">화</span>
                                            <span class="num_g">20</span>
                                        </label>
                                    </div>
                                    <div class="swiper-slide item_day">
                                        <input type="radio" name="radio_day" id="radio_day16" class="radio_item" value="16"/>
                                        <label class="label_item" for="radio_day_16">
                                            <span class="name_item">수</span>
                                            <span class="num_g">21</span>
                                        </label>
                                    </div>
                                    <div class="swiper-slide item_day">
                                        <input type="radio" name="radio_day" id="radio_day16" class="radio_item" value="16"/>
                                        <label class="label_item" for="radio_day_16">
                                            <span class="name_item">목</span>
                                            <span class="num_g">22</span>
                                        </label>
                                    </div>
                                    <div class="swiper-slide item_day">
                                        <input type="radio" name="radio_day" id="radio_day16" class="radio_item" value="16"/>
                                        <label class="label_item" for="radio_day_16">
                                            <span class="name_item">금</span>
                                            <span class="num_g">23</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="area_reservePage">

                </div>
                <div class="group_bottom_btn fixed">

                </div>
                
            </body>
        );
    }
}

export default Reserve;