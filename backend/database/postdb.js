const PostModel = require("../src/models/post");

function getAll(callback){
    PostModel.find({}, (error,result) => {
        callback(result);
    });
}
function add(body, callback){
    const newPost = new PostModel({
        profile: body.profile,
        //dormitory: body.dormitory,
        brdwriter: body.brdwriter,
        brdtitle: body.brdtitle,
        brdcontent: body.brdcontent,
        hashtag: body.hashtag,
        brddate: body.brddate,
        kakaoID: body.kakaoID
    })
    newPost.save((err,res) => {
        callback(res);
    });
}
function remove(_id, kakaoID, callback) {
    PostModel.findOne({_id: _id, kakaoID: kakaoID}, (error,result) => {
        if(result == null){
            callback("fail");
        }
        else{
            PostModel.deleteOne({_id: _id}, (error) => {
                callback("success");
            });
        }

    })

}
function update(_id, body, callback) {
    PostModel.findOneAndUpdate({_id: _id}, {
        brdwriter: body.brdwriter,
        brdtitle: body.brdtitle,
        brdcontent: body.brdcontent,
        hashtag: body.hashtag,
        brddate: body.brddate
    },
    (error) => {callback();});
}

module.exports = {
    getAll,
    add,
    remove,
    update
};