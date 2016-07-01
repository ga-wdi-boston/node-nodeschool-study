'use strict';

let fs = require('fs');

let pathname = process.argv[2];

let ext = process.argv[3];

let pattern = RegExp('\\.' + ext + '$');

let result = fs.readdir(pathname, function (err, data) {
  for (let i = 0; i < data.length; i++) {
    if(pattern.test(data[i])) {
      console.log(data[i]);
    }
  }
});

//go over each file, search, console.log only the ones that match
// remember that .test is how you find stuff for RegExp
// yay!

//var fs = require('fs')  
//var path = require('path')

//var folder = process.argv[2]
//var ext = '.' + process.argv[3]

//fs.readdir(folder, function (err, files) {
  //if (err) return console.error(err)
//  files.forEach(function(file) {
  //    if (path.extname(file) === ext) {
    //      console.log(file)
  //    }
//  })
//})
