// require('dotenv').config();
var express = require('express');
var app = express();
var PORT=5000 || process.env.PORT;

app.get('/', function(res,res){
    res.render("index")
})

app.get('/new', function(req,res){
    res.render("new")
})

app.set("view engine", "ejs")
//Schema
app.listen(PORT, process.env.IP, function(err){
    if(err){
        console.log(err);
    } else {
        console.log("Server is running, listening on port " + PORT);
    }
});