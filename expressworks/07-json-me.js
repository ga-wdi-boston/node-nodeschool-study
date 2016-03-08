'use strict';
let fs = require('fs');

let express = require('express');
let app = express();
let thing;
app.get('/books', function(req, res) {
  let filename = process.argv[3];
  fs.readFile(filename, (error, data) => {
    if(error) {
      res.sendStatus(500);
    }
    try {
      thing = JSON.parse(data);
    }
    catch(error) {
      res.sendStatus(500);
    }
    res.json(thing);
  });
});
app.listen(process.argv[2]);
