'use strict';

const express = require('express');
const bodyparser = require('body-parser');
const fs = require('fs');

const app = express();

let filePath = process.argv[3];

app.use(bodyparser.urlencoded({extended: false}));

app.get('/books', function(req, res){
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

app.listen(process.argv[2]);
