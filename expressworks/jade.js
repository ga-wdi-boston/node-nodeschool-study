var express = require('express');
var app = express();
var path = require('path');

app.set('views',process.argv[3])
app.set('view engine', 'jade')

app.get('/home', function (req, res) {
  res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2], function () {
  console.log('Example app listening on port 3000!');
});



// var express = require('express')
// var app = express()
// app.set('view engine', 'jade')
// app.set('views', process.argv[3])
// app.get('/home', function(req, res) {
//  res.render('index', {date: new Date().toDateString()})
//  })
// app.listen(process.argv[2])
