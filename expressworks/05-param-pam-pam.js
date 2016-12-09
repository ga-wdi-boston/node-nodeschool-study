// Create an Express.js server that processes PUT /message/:id requests
// and produces a SHA-1 hash of the current date combined with the ID from the URL.

var express = require('express');
// var bodyparser = require('body-parser');

var app = express();
// app.use(bodyparser.urlencoded({extended: false}));
app.put('/message/:id', function(req, res){
  var id = req.params.id;
  var sha = require('crypto')
              .createHash('sha1')
              .update(new Date().toDateString() + id)
              .digest('hex');
  res.end(sha);
});
app.listen(process.argv[2]);
