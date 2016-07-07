var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.argv[2];

app.use(bodyParser.urlencoded({extended: false}));
app.get('/search', function(req, res) {
  res.send(req.query);
});
app.listen(port);

// got this from req.query here:
// http://expressjs.com/en/api.html
