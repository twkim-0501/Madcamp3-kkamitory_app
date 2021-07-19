const ReportModel = require("../src/models/report");

function getAll(callback){
    ReportModel.find({}, (error,result) => {
        callback(result);
    });
}
function add(body, callback){
    console.log(body.report_name);
    const newPost = new ReportModel({
        report_name : body.report_name,
        report_title : body.report_title,
        report_content :body.report_content,
        report_address : body.report_address
    })
    newPost.save((err,res) => {
        callback(res);
    });
}
function removeOne(_id, callback) {
    ReportModel.deleteOne({_id: _id}, (error) => {
        callback();
    });
}

module.exports = {
    getAll,
    add,
    removeOne
};