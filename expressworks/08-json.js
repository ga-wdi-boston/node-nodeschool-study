
var express = require('express');
var fs = require('fs');
var app = express();

app.get('/books', (req, res) => {
  fs.readFile(process.argv[3], (err, data) => {
    if (err) return res.sendStatus(500);
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500);
    }
    res.json(books);
  });
});

app.listen(process.argv[2]);

// why does 'use strict' break this?
