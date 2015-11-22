var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.set('view engine', 'jade');
app.set('views', process.argv[3]);

app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()});
});

app.listen(process.argv[2]);
