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
