var express = require('express');
var app = express();
var server = app.listen(3001, function(){
    console.log("Express server has started on port 3001")
})

app.get('/', function(req, res){
    res.send('Hello World');
});
