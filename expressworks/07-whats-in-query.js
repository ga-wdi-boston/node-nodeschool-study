var express = require('express');
var app = express();


app.get('/search', function(req, res){
  var requestQuery = req.query;
  res.send(requestQuery);
});

app.listen(process.argv[2]);

