const express = require('express');
const app = express();
const fs = require('fs');

app.get('/books', function(req, res){
  const filename = process.argv[3];
  fs.readFile(filename, function(event, data) {
    if (event) return res.sendStatus(500)
    try {
      books = JSON.parse(data);
    } catch (event) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})

app.listen(process.argv[2]);
