'use strict';

let path = require('path')
let crypto = require('crypto')
let express = require('express')
let app = express()

  app.put('/message/:id', function(req, res){
    let id = req.params.id
    let string = crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex')
    res.send(string);
  });

app.listen(process.argv[2])
