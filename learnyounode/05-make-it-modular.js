'use strict';

let dirPath = process.argv[2];
let ext = process.argv[3];
const filterDir = require('./05-filter-dir.js');

filterDir(dirPath, ext, function(err, list) {
  if(err) {
    return console.error('There was an error', err);
  } else {
    list.forEach(function(file) {
      console.log(file);
    });
  }
});
