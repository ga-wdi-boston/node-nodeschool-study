'use strict';

 let fs = require('fs');

 let filePath = process.argv[2];

 let buf;

 function processData(data){
   let numLines = data.split('\n').length - 1;
   console.log(numLines);
 }

 function read(err, data) {
   if (err) {
     throw err;
   }
   processData(data);
 }

 fs.readFile(filePath, 'utf8', read);

// official solution
// var fs = require('fs')
// var file = process.argv[2]
//
// fs.readFile(file, function (err, contents) {
//   if (err) {
//     return console.log(err)
//   }
//   // fs.readFile(file, 'utf8', callback) can also be used
//   var lines = contents.toString().split('\n').length - 1
//   console.log(lines)
// })
