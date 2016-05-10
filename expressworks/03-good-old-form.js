'use strict';

let bodyparser = require('body-parser');
let express = require('express');
let app = express();

app.use(bodyparser.urlencoded({extended: false}))
app.post('/form', function(req, res) {
  res.end(req.body.str.split('').reverse().join(''));
});
app.listen(process.argv[2]);

//tests not passing, will try again tomorrow
