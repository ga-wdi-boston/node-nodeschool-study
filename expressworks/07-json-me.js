var express = require('express');
var fs = require('fs');

var serve = express();

serve.get('/books', function (req, res) {
  fs.readFile(process.argv[3], 'utf8', function (error, data) {
    res.send(JSON.parse(data));
  });
});

serve.listen(process.argv[2]);
