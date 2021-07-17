/*Reserve API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");

const ReserveSchema = new mongoose.Schema({
    reserve_date: String,
    reserve_user: String,
    dormitory: String,
    washer_no: String,
    reserve_time: String,
    user_ID: String
});

const ReserveModel = mongoose.model("reserve", ReserveSchema);
module.exports = ReserveModel;