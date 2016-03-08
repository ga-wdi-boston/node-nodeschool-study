'use strict'

// let fs = require('fs');
// let file = process.argv[2];
//
// fs.readdir(file, function(err, list) {
//   if (err) throw err;
//   let ext = process.argv[3];
//   let answer = list.filter(function(e) {
//     var len = ext.length+1;
//     return (e.substr(e.length-len, e.length) === '.' + ext);
//   });
//
//   for (let i = 0; i < answer.length; i++) {
//     console.log(answer[i]);
//   }
// });

let fs = require('fs');
let file = process.argv[2];
let path = require('path')

fs.readdir(file, function (err, list) {
 list.forEach(function (answer) {
   if (path.extname(answer) === '.' + process.argv[3])
     console.log(answer)
 })
})

function bar (callback) {
   foo(function (err, data) {
     if (err)
       return callback(err) // early return

     // ... no error, continue doing cool things with `data`  

     // all went well, call callback with `null` for the error argument

     callback(null, data)
   })
 }


module.exports = function (args) {}
