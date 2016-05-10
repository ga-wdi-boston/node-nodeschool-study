'use strict';

let express = require('express');
let fs = require('fs');
let app = express();
let file = process.argv[3];

app.get('/books', function(req, res) {
  fs.readFile(file, (error, data) => {
    if (error) {
      console.log(error);
    }
    let object = JSON.parse(data);
    res.json(object);
  })
});

app.listen(process.argv[2]);
