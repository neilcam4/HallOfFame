// require('dotenv').config();
var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000;
app.set('view engine', 'ejs')

app.get('/', function(req,res){
    res.render("players")
})

app.get('/new', function(reeq,res){
    res.render("new")
})

//Schema
app.listen(PORT, process.env.IP, function(err){
    if(err){
        console.log(err);
    } else {
        console.log(process.env.PORT)
        console.log("This Server is running, listening on port " + PORT);
    }
});