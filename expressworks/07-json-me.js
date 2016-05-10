'use strict';

let express = require('express');

let app = express();
let fs = require('fs');
let bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.get('/books', function(req, res) {
  fs.readFile(process.argv[3], 'utf8', (error, data) => {
    res.send(JSON.parse(data));
  })
});

app.listen(process.argv[2]);
