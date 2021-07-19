var express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const postRouter = require('./src/routes/post');
const eatpostRouter = require('./src/routes/eat_post');
const morgan = require('morgan');

const reserveRouter = require('./src/routes/reserve')

const buypostRouter = require('./src/routes/buy_post');
const reportRouter = require('./src/routes/report');

const userRouter = require('./src/routes/user');


const mongoose = require("mongoose");
const app = express();
const port = 80;

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

/*Router for requests*/
//app.use(morgan('dev'));
app.use('/post', postRouter);
app.use('/eat_post', eatpostRouter);
app.use('/buy_post', buypostRouter);
app.use('/user', userRouter);

app.use('/reserve', reserveRouter);

app.use('/report', reportRouter);


app.get('/', (req, res) => {
    res.status(418).send("Project Kkamitory");
});

app.listen(port, () => {
    console.log(port+"에서 express 실행 중");
})
