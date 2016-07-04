'use strict'

let express = require('express')
let fs = require('fs')
let app = express()

app.get('/books', function(req, res){
  fs.readFile(process.argv[3], (err,data) => {
    if (err) throw err;
    let obj = JSON.parse(data);
    res.json(obj);
  });
})
app.listen(process.argv[2])
