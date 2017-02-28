var express = require('express');
var fs = require('fs');

var app = express();

app.get('/books', function (req, res) {
  fs.readFile(process.argv[3], 'utf8', function (error, data) {
    res.send(JSON.parse(data));
  });
});

app.listen(process.argv[2]);
