var path = require('path');
var express = require('express');
var app = express();
var port = process.argv[2];
var homePage = process.argv[3];

app.set('view engine', 'jade')
app.set('views', path.join('/Users/mishaherscu/wdi/study/node-nodeschool-study/expressworks', 'templates'))

app.get('/home', function(req, res) {
  res.render(homePage, {date: new Date().toDateString()})
});
app.listen(port);
