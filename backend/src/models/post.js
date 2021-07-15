/*Post API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    profile: String,
    dormitory: String,
    brdwriter: String,
    brdtitle: String,
    brdcontent: String,
    hashtag: String,
    brddate: String
});

const PostModel = mongoose.model("post", PostSchema);
module.exports = PostModel;