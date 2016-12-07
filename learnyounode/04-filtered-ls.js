'use strict';
// Create a program that prints a list of files in a given directory,
// filtered by the extension of the files.

// load the fs and path modules from the Node core library
var fs = require('fs');
var path = require('path');

// get a file listing and filter out the ones that have the correct extension
fs.readdir(process.argv[2], (err, list) => {
  if (err) throw err;
  for (let i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === '.' + process.argv[3]) {
      console.log(list[i]);
    }
  }
});
