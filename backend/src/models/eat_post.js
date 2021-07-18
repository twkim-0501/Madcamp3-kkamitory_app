/*Post API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");

const EatPostSchema = new mongoose.Schema({
    profile: String,
    dormitory: String,
    brdwriter: String,
    brdtitle: String,
    brdcontent: String,
    total_member: Number,
    join_profile_list : Array,
    brddate: String,
    profile_id: String,
});

const EatPostModel = mongoose.model("eatpost", EatPostSchema);
module.exports = EatPostModel;
//model export