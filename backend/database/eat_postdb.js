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
        profile_id: body.profile_id,
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
function removeall(_id, callback) {
    
    EatPostModel.deleteMany({}, (error) => {
        callback();
    });
}

function update(_id, body, callback) {
    //console.log(body.join_profile_list);
    EatPostModel.findOne({_id: _id}, (err, res) => {
        //console.log(res);
        EatPostModel.findOneAndUpdate({_id: _id}, {
            brdwriter: body.brdwriter,
            brdtitle: body.brdtitle,
            brdcontent: body.brdcontent,
            total_member: body.total_member,
            join_profile_list : body.join_profile_list,
            brddate: body.brddate
        }, (error) => {callback("200")});
        /*
        if(body.total_member < body.join_profile_list.length){
            console.log(400);
             callback("400");
        }
        else{
            EatPostModel.findOneAndUpdate({_id: _id}, {
                brdwriter: body.brdwriter,
                brdtitle: body.brdtitle,
                brdcontent: body.brdcontent,
                total_member: body.total_member,
                join_profile_list : body.join_profile_list,
                brddate: body.brddate
            }, (error) => {callback("200")});
        }*/
    });
}

module.exports = {
    getAll,
    add,
    remove,
    removeall,
    update
};