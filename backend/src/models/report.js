/*Post API의 라우터와 요청을 처리하는 로직 */
const mongoose = require("mongoose");

const ReportSchema = new mongoose.Schema({
    report_name : String,
    report_title : String,
    report_content : String,
    report_address : String
});

const ReportModel = mongoose.model("report", ReportSchema);
module.exports = ReportModel;