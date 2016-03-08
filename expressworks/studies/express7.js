var express = require('express');
var app = express();
var fs = require('fs');
var file = process.argv[3];

app.get('/books', function(req, res) {
  fs.readFile(file, function(err, data) {
    if (err)
      return res.sendStatus(500);

    try {
      var content = JSON.parse(data);
    } catch (err) {
      res.sendStatus(500);
    }

    // var books = res.json(content);
    res.json(content);
  })
  // res.send(books);
})
app.listen(process.argv[2]);
