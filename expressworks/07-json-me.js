'use strict';

const fs = require('fs');
const express = require('express');
const app = express();

app.get('/books', function(req, res){
  let filename = process.argv[3]
  let books;
  fs.readFile(filename, function(error, data) {
    if (error) return res.sendStatus(500);
    try {
      books = JSON.parse(data);
    } catch (error) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2])
