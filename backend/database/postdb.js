const PostModel = require("../src/models/post");

function getAll(callback){
    PostModel.find({}, (error,result) => {
        callback(result);
    });
}
function add(body, callback){
    const newPost = new PostModel({
        //profile: body.profile,
        //dormitory: body.dormitory,
        brdwriter: body.brdwriter,
        brdtitle: body.brdtitle,
        brdcontent: body.content,
        hashtag: body.hashtag,
        brddate: body.brddate
    })
    newPost.save((err,res) => {
        callback(res);
    });
}

module.exports = {
    getAll,
    add
};