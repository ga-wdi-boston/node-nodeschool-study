'use strict';

const express = require('express');

let app = express();
app.get('/home', function(req, res) {
  res.send('Hello World!');
});


app.listen(process.argv[2]);
