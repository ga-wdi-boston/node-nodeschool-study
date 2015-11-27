var express = require('express');
var app = express();
var fs = require('fs');

app.get('/books', function(request, response) {
  var file = process.argv[3];
  fs.readFile(file, function (err, data) {
    if (err) {
      console.error(err);
    }
    book = JSON.parse(data);
    response.json(book);
  });
});




app.listen(process.argv[2]);
