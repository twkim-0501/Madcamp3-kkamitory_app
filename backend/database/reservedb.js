const ReserveModel = require("../src/models/reserve");

function getAll(callback){
    ReserveModel.find({}, (error,result) => {
        callback(result);
    });
}

module.exports = {
    getAll
};