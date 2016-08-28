'use strict';

const fs = require('fs');
const path = require('path');

function listFiles(filepath, extenstion, callback) {
  fs.readdir(filepath, function(error, list){
    if (error) {
      return callback(error);
    }
    else {
      list = list.filter(function(file){
        if (path.extname(file) === '.' + extenstion) {
          return true;
        }
      });
      return callback(null, list);
    }
  });
}

module.exports = listFiles;
