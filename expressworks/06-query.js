'use strict';

let express = require('express');
let app = express();

app.get('/search', function(req, res) {
  res.send(req.query);
});

app.listen(process.argv[2]);
