/*Post API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");

const BuyPostSchema = new mongoose.Schema({
    profile: String, //profile image
    //dormitory: String,
    brdwriter: String,
    brditem: String,
    brdcontent: String,
    total_member: String,
    total_price: String,
    join_profile_list :Array,
    profile_id: String,
});

const BuyPostModel = mongoose.model("buypost", BuyPostSchema);
module.exports = BuyPostModel;