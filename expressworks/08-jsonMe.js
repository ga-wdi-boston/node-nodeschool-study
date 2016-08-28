var express = require('express');
var app = express();
var fs = require('fs');


// console.log(process.argv);
var port = process.argv[2];
var file = process.argv[3];

app.get('/books', function(request, result){
  var filename = file;
  fs.readFile(filename, function(error, data){
    if (error) {
      return result.sendStatus(500);
    }

    try {
      books = JSON.parse(data);
    } catch (error) {
      result.sendStatus(500);
    }

    result.json(books);
  });
});

app.listen(port || 3000);
