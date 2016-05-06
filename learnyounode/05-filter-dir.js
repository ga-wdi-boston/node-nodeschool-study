'use strict';

const fs = require('fs');

const filterDir = function(dirPath, ext, callback) {
  fs.readdir(dirPath, function(err,list) {
    if (err) {
      return callback(err);
    } else {
      let files = list.map((file) => file.split('.'));
      files = files.filter((file) => file[1] === ext);
      files = files.map((file) => file[0] + '.' + file[1]);
      callback(null, files);
    }
  });
}

module.exports = filterDir;
