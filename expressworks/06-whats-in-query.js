'use strict';

let express = require('express');

let app = express();
let bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({extended: false}));

app.get('/search', function(req, res) {
  res.send(req.query);
});

app.listen(process.argv[2]);
