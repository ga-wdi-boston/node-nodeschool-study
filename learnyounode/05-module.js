'use strict';

let fs = require('fs')
let path = require('path')

module.exports = fs.readdir(dirName, ext, function (err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + ext)
      console.log(file);
  });
});

// still not passing, not sure why
