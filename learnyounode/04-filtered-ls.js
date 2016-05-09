'use strict';

let fs = require('fs');
let path = require('path');

module.exports = function(filename, ext, callback) {
let extension = "." + ext;
  fs.readdir(filename, function(err, files) {
    if (err) {
      callback(err, null);
    }
    else {
      let result = [];
      files.forEach(function(entry) {
        if (path.extname(entry) == extension) {
          result.push(entry);
        }
      });
      callback(null, result);
    }
  });

};
