'use strict';
let express = require('express');
let bodyparser = require('body-parser');
let app = express();
let url = process.argv[2];
app.use(bodyparser.urlencoded({extended: false}));
app.post('/form', function(req, res){
  let data = req.body.str.split('').reverse().join('');
  res.end(data);
})
app.listen(url);
