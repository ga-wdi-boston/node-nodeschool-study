'use strict';
let express = require('express');
let bodyparser = require('body-parser')

let app = express();
app.use(bodyparser.urlencoded({extended: false}));

// app.get('/form', function(req, res){
//
// });

app.post('/form', function(req, res) {
  res.send(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2] || 3000);
