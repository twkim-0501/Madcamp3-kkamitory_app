const ReserveModel = require("../src/models/reserve");

function getAll(callback){
    ReserveModel.find({}, (error,result) => {
        callback(result);
    });
}
function add(body,callback){
    const newReserve = new ReserveModel({
        reserve_date: body.reserve_date,
        reserve_user: body.reserve_user,
        dormitory: body.dormitory,
        washer_no: body.washer_no,
        reserve_time: body.reserve_time,
        user_ID: body.user_ID
    })
    newReserve.save((err,res) => {
        callback(res)
    });
}
function getReserves(kakaoID, callback){
    ReserveModel.find({user_ID: kakaoID}, (err,res) => {
        console.log(res);
        callback(res);
    })
}
function deleteAll(callback){
    ReserveModel.remove({}, (error,result) => {
        callback(result)
    }
        );
}

module.exports = {
    getAll,
    add,
    deleteAll,
    getReserves
};