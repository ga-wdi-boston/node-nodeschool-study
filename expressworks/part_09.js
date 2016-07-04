'use strict';

let fs = require('fs')
let path = require('path')
let express = require('express')
let app = express()

app.get('/books', function(req, res){
  fs.readFile(process.argv[3], function(err, data) {
    if (err) throw err
    let object = JSON.parse(data)
    res.json(object)
  })

  //  res.send(req.query);
  });


app.listen(process.argv[2])
