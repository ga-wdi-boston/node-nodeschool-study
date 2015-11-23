//jshint node: true
//Hello routes
'use strict';
//started by copy-pasting from index.js in the same folder
var express = require('express');
var app = express();

app.get('/home', function(req, res) {
      res.end('Hello World!');
    });
app.listen(process.argv[2]);

