'use strict';

const fs = require('fs');
const path = require('path');


module.exports = function (dirName, fileExt, callback) {
  fs.readdir(dirName, function (err, list) {
    if (err) return callback(err);
    list.forEach(function (filename) {
      if (path.extname(filename) === '.' + fileExt) {
        console.log(filename);
      }
    });
  });
};
