'use strict';
let express = require('express');
let app = express();
let fs = require('fs');
let url = process.argv[2];
app.get('/books', function(res){
  fs.readFile(process.argv[3], (err, data) => {
    let object = JSON.parse(data);
    return object;
  })
  res.json(object);
})
app.listen(url);
