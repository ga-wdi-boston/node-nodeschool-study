var express = require('express');
var app = express();

app.get('/search', function(req, res) {
  var pojo = req.query;

  res.send(pojo);
});

app.listen(process.argv[2]);
