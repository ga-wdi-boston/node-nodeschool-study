var express = require('express');
var pug = require('pug');
var port = process.argv[2];
var index = process.argv[3];
var app = express();

app.set('views', path.join(__dirname, index));
app.set('view engine', 'pug');
app.use('/home', function(req, res) {
  res.render(index, {date: new Date().toDateString()});
});
app.listen(port);
