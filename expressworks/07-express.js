'use strict';

let express = require('express');
let fs = require('fs');
let app = express();
let port = process.argv[2];
let file = process.argv[3];

app.get('/books', (request, response) => {
  fs.readFile(file, (error, data) => {
    if (error) {
      console.error(error)
    }
    let books = JSON.parse(data);
    response.json(books);
  });
});

app.listen(port);
