var express = require('express');
var app = express();
var fs = require('fs');


app.get('/books', function(req, res){
  var file = fs.readFile(process.argv[3], function (err, data){
    if(err) throw err;
    string = JSON.parse(data);
    res.json(string);
  }); 
});

app.listen(process.argv[2]);
