'use strict';

const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.put('/message/:id', function(req, res){
  res.end(require('crypto')
          .createHash('sha1')
          .update(new Date().toDateString() + req.params.id)
          .digest('hex'));
});

app.listen(process.argv[2]);
