const EatPostModel = require("../src/models/eat_post");
//model import


//Create Retrieve Update Delete
function getAll(callback){
    EatPostModel.find({}, (error,result) => {
        callback(result);
    });
}

function add(body, callback){
    const newEatPost = new EatPostModel({
        profile: body.profile,
        //dormitory: body.dormitory,
        brdwriter: body.brdwriter,
        brdtitle: body.brdtitle,
        brdcontent: body.brdcontent,
        total_member: body.total_member, //the number of total members
        join_profile_list : body.join_profile_list, //join member array initial value
        brddate: body.brddate
    })
    newEatPost.save((err,res) => {
        callback(res);
    });
}

function remove(_id, callback) {
    console.log("eat_post db remove");
    EatPostModel.deleteOne({_id: _id}, (error) => {
        callback();
    });
}

function update(_id, body, callback) {
    EatPostModel.findOne({_id: _id}, (err, res) => {
        if(body.total_member < body.join_profile_list.length){
             callback(200);
        }
        else{
            EatPostModel.findOneAndUpdate({_id: _id}, {
                brdwriter: body.brdwriter,
                brdtitle: body.brdtitle,
                brdcontent: body.brdcontent,
                total_member: body.total_member,
                join_profile_list : body.join_profile_list,
                brddate: body.brddate
            }, (error) => {callback(400)});
        }
    });
    //추가해야할 것! 고치려고 하는 total member가 join_profile_list수보다 적을 때 요청 거부하기.
    //const selectedBrd = EatPostModel.findOne({_id : _id});
    // if(body.total_member < selectedBrd.join_profile_list.length //total_member 잘못 수정했을 때 (update요청)
    //     || body.total_member < body.join_profile_list.length){ //member 다 찼을 때 (join요청)
    //     callback({update_apr : "NUMBER_MISMATCH"})
}

module.exports = {
    getAll,
    add,
    remove,
    update
};