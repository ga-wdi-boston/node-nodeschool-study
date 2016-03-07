'use strict'

let express = require('express');
let app = express();

app.get('/search', function(req, res) {
  let object = req.query
  res.send(object)
})
app.listen(process.argv[2]);
