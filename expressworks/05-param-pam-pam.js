'use strict';

const express = require('express');
const app = express();

app.put('/message/:id', function(req, res){
  let id = req.params.id
  let string = require('crypto')
    .createHash('sha1')
    .update(new Date().toDateString() + id)
    .digest('hex')
  res.send(string)
})

app.listen(process.argv[2])
