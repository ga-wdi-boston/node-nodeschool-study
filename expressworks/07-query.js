// express js library
var express = require('express');

// instantiate, invoke express
var app = express();

app.get('/search', function(req, res){
  var query = req.query
  res.send(query)
})

app.listen(process.argv[2] || 3000)
