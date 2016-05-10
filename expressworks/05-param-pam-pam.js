'use strict';

let express = require('express');

let app = express();
let bodyparser = require('body-parser');
let crypto = require('crypto');

app.use(bodyparser.urlencoded({extended: false}));

app.put('/message/:hash', function(req, res) {
  let stuff  = crypto.createHash('sha1')
                      .update(new Date().toDateString() + req.params.hash)
                      .digest('hex');
  res.send(stuff);
});

app.listen(process.argv[2]);
