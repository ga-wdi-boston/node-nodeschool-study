var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.argv[2];
var file = process.argv[3];

// app.use(bodyParser.urlencoded({extended: false}));
app.get('/books', function(req, res) {
  var content = fs.readFile(file, 'utf8', function(err, lines){
    if(err){
      return res.sendStatus(500);
    }
    try {
      var books = JSON.parse(lines);
    } catch (error) {
      res.sendStatus(500);
    }
    res.json(books);
  })
})

app.listen(port);
