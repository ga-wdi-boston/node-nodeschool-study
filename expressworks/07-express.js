'use strict';

const express = require('express');
const fs = require('fs');

let app = express();

app.get('/books', function(req, res) {
  let object = [];
  fs.readFile(process.argv[3], 'utf8', (error, data) => {
    if (error) {
      throw error;
    }
    object = JSON.parse(data);
    res.json(object);
  });
});



app.listen(process.argv[2]);
