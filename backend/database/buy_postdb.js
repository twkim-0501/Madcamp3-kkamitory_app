const BuyPostModel = require("../src/models/buy_post");

function getAll(callback){
    BuyPostModel.find({}, (error,result) => {
        callback(result);
    });
}
function add(body, callback){
    const newPost = new BuyPostModel({
        profile: body.profile,
        //dormitory: body.dormitory,
        brdwriter: body.brdwriter,
        brditem: body.brditem,
        brdcontent: body.brdcontent,
        total_member : body.total_member,
        total_price : body.total_price,
        join_profile_list : body.join_profile_list,
        profile_id: body.profile_id
    })
    newPost.save((err,res) => {
        callback(res);
    });
}
function remove(_id, callback) {
    BuyPostModel.deleteOne({_id: _id}, (error) => {
        callback();
    });
}
function update(_id, body, callback) {
    BuyPostModel.findOne({_id: _id}, (err, res) => {
        if(body.total_member < body.join_profile_list.length){
             callback(200);
        }
        else{
            BuyPostModel.findOneAndUpdate({_id: _id}, {
                brdwriter: body.brdwriter,
                brditem: body.brditem,
                brdcontent: body.brdcontent,
                total_member: body.total_member,
                join_profile_list : body.join_profile_list
            }, (error) => {callback(400)});
        }
    });
}

module.exports = {
    getAll,
    add,
    remove,
    update
};