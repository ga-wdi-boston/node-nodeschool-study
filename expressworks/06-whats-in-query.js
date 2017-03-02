var express = require('express');
var app = express();

app.get('/search', function(req, res){
  var query = req.query;
  var string = res.send(query);
});

app.listen(process.argv[2]);
