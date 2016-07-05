'use strict';
let express = require('express');
let app = express();
let url = process.argv[2];
app.get('/search', function(req, res){
  let query = req.query.NAME;
  res.send(query);
})
app.listen(url);
