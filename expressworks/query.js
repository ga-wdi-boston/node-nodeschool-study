var express = require('express');
var app = express();


app.get('/search', function(req, res){ //handlers
  var query = req.query; //query object inside the request object
  res.send(query); // output it back
});

app.listen(process.argv[2] || 3000) // listen to port provided
