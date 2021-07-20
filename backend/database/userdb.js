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
                var isAdmin = false;
                /*
                if(userInfo.kakaoID == "1807412007"){
                    isAdmin = true;
                }*/
                console.log(isAdmin)
                UserModel.findOneAndUpdate({kakaoID: userInfo.kakaoID}, {
                    kakaoID: userInfo.kakaoID,
                    nickname: userInfo.nickname,
                    profile_image: userInfo.profile_image,
                    isAdmin: isAdmin
                },
                (err) => {callback();}
                )
            }
            else{
                var isAdmin = false;
                if(userInfo.kakaoID == "1807412007" || userInfo.kakaoID=="1807910942"){
                    isAdmin = true;
                }
                UserModel.findOneAndUpdate({kakaoID: userInfo.kakaoID}, {
                    kakaoID: userInfo.kakaoID,
                    nickname: userInfo.nickname,
                    profile_image: userInfo.profile_image,
                    dormitory: userInfo.dormitory,
                    isAdmin: isAdmin
                },
                (err) => {callback();}
                )
            }
            
        }
        else{
            var isAdmin = false;
                if(userInfo.kakaoID == "1807412007"||userINfo.kakaoID=="1807910942"){
                    isAdmin = true;
                }
            const newUser = new UserModel({
                kakaoID: userInfo.kakaoID,
                nickname: userInfo.nickname,
                profile_image: userInfo.profile_image,
                dormitory: userInfo.dormitory,
                isAdmin: isAdmin
            });
            newUser.save();
            callback();
        }
    })
}

function deleteAll(callback){
    console.log("jere!");
    UserModel.remove({}, (error,result) => {
        console.log(error);
        console.log(result);
        callback();
    }
    );
}

module.exports = {
    getAll,
    getUser,
    add,
    deleteAll,
}