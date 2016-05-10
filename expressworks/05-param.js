'use strict';

let express = require('express');
let app = express();
let crypto = require('crypto');

let bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended: false}));

app.put('/message/:id', function(req, res) {
  var id = req.params.id;
  var str = crypto.createHash('sha1').update(new Date().toDateString().toString() + id).digest('hex');
  res.send(str);
});

app.listen(process.argv[2]);
