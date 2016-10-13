'use strict';
// const filterByFileExt = function(file) {
//   return path.extname(file) == '.' + this;
// };

module.exports = function (directoryName, fileExt, callback) {
  const fs = require('fs');
  const path = require('path');
  fs.readdir(directoryName, (err, files) => {
    if (err) {
      return callback(err);
    } else {
      files.filter(function(file) {
        return path.extname(file) == '.' + fileExt;
      }).forEach(function(element){
        return callback(element);
      });
    }
  });
};
