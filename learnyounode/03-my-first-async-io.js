'use strict';

let fs = require('fs')

let filename = process.argv[2]

let buf = fs.readFile(filename, 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data.split('\n').length - 1);
});


// Official answer:
// var fs = require('fs')
// var file = process.argv[2]
//
// fs.readFile(file, function (err, contents) {
//   // fs.readFile(file, 'utf8', callback) can also be used  
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })
