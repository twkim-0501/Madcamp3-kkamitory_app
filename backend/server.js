var express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const mongoose = require("mongoose");

const app = express();
const port = 8080;

mongoose.connect("mongodb://localhost:27017/kkamitory", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.once("open", function() {
  console.log("DB connected!");
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.get('/', (req, res) => {
    res.status(418).send("Project Kkamitory");
});

app.get('/', function(req, res){
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(port+"에서 express 실행 중");
})
