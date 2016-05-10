'use strict';

let express = require('express');
let app = express();
let fs = require('fs');

app.get('/books', function(req, result) {
  fs.readFile(process.argv[3], function(err, data) {
    if (err) {
    console.error(err);
  }
    let books = JSON.parse(data);
    result.json(books);
  });
});

app.listen(process.argv[2]);
