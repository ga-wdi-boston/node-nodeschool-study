var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function (req, res) {
  var fileName = process.argv[3];
  fs.readFile(fileName, function (error, data) {
    if (error) {
      console.error(error);
    } else {
      console.log(data);
    } res.json(JSON.parse(data));
  });
});

app.listen(process.argv[2]);
