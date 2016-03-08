'use strict'

let fs = require('fs');
let file = process.argv[2];
let path = require('path')

function filter () {
  fs.readdir(file, function (err, list) {
   list.forEach(function (answer) {
     if (path.extname(answer) === '.' + process.argv[3])
       console.log(answer)
   })
  })
}


module.exports = filler () {}
