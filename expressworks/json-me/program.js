var express = require('express');
var app = express();
var fs = require('fs')
app.get('/books', function(req, res){
  var fileName = process.argv[3]
  fs.readFile(fileName, function(error,data){
    res.json(  object = JSON.parse(data))
  })
});


app.listen(process.argv[2]);
