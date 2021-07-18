const UserModel = require("../src/models/user");

function getAll(callback){
    UserModel.find({}, (error,result) => {
        callback(result);
    });
}
function getUser(kakaoID, callback){
    UserModel.findOne({kakaoID: kakaoID}, (err,res) => {
        callback(res);
    });
}
function add(userInfo, callback){
    UserModel.findOne({kakaoID: userInfo.kakaoID}, (err,res) => {
        if(res){
            if(userInfo.dormitory==null){
                UserModel.findOneAndUpdate({kakaoID: userInfo.kakaoID}, {
                    kakaoID: userInfo.kakaoID,
                    nickname: userInfo.nickname,
                    profile_image: userInfo.profile_image,
                },
                (err) => {callback();}
                )
            }
            else{
                UserModel.findOneAndUpdate({kakaoID: userInfo.kakaoID}, {
                    kakaoID: userInfo.kakaoID,
                    nickname: userInfo.nickname,
                    profile_image: userInfo.profile_image,
                    dormitory: userInfo.dormitory
                },
                (err) => {callback();}
                )
            }
            
        }
        else{
            const newUser = new UserModel({
                kakaoID: userInfo.kakaoID,
                nickname: userInfo.nickname,
                profile_image: userInfo.profile_image,
                dormitory: userInfo.dormitory
            });
            newUser.save();
            callback();
        }
    })
}
module.exports = {
    getAll,
    getUser,
    add
}