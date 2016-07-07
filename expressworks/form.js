var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.argv[2];

app.use(bodyParser.urlencoded({extended: false}));
app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''));
});
app.listen(port);
