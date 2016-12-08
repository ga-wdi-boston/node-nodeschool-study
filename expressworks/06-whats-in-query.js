// Write a route that extracts data from the query string in the GET /search URL
// route, e.g. ?results=recent&include_tabs=true and then outputs it back to
// the user in JSON format.

var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(bodyparser.urlencoded({extended: false}));
app.get('/search', function(req, res) {
  var object = req.query;
  res.send(object);
});
app.listen(process.argv[2]);
