'use strict';

let express = require('express');
let app = express();
app.get('/search', function(req, res) {
  let query = req.query;
  res.send(query);
});
app.listen(process.argv[2]);
