var express = require('express');
var app = express();
var path = require('path');

app.set('views', path.join(process.argv[3], 'templates'));
app.set('view engine', 'jade');
app.get('/home', function(req,res){
  res.render('index', {date: new Date().toDateString()})
})


app.listen(process.argv[2])
