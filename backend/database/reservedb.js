const ReserveModel = require("../src/models/reserve");

function getAll(callback){
    ReserveModel.find({}, (error,result) => {
        callback(result);
    });
}
function getTimelist(callback){
    ReserveModel.find({}, (error,result)=> {
        callback(result.map(reserve => reserve.reserve_time));
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
function cancel(kakaoID,callback){
    ReserveModel.deleteOne({user_ID: kakaoID}, (error) => {
        callback();
    });
}

function getReserves(kakaoID, callback){
    ReserveModel.find({user_ID: kakaoID}, (err,res) => {
        callback(res);
    })
}
function checkReserved(body, callback){
    ReserveModel.findOne({
        reserve_date: body.date,
        //dormitory: body.dorm,
        washer_no: body.washer,
        reserve_time: body.time
    },(err,res) => {
        if(res){
            callback({isReserved: true});
        }
        else{
            callback({isReserved: false});
        }
        
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
    getReserves,
    checkReserved,
    cancel,
    getTimelist,
};