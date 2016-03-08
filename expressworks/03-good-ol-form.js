'use strict';
let path = require('path');
let express = require('express');
let app = express();
let bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.post('/form', function(req, res){
  res.send(req.body.str.split('').reverse().join(''));

});

app.listen(process.argv[2]);
