// Write a server that, when it receives a GET, reads a file, parses it to JSON,
// and responds with that content to the user.

var express = require('express');
var fs = require('fs');

var file = process.argv[3];

var app = express();
app.get('/books', function(req, res) {
  fs.readFile(file, 'utf-8', function(err, list) {
    if (err) throw err;
    object = JSON.parse(list);
    res.json(object);
  });
});
app.listen(process.argv[2]);
