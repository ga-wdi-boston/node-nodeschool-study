'use strict';

const express = require('express');
const bodyparser = require('body-parser');

let app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2]);
