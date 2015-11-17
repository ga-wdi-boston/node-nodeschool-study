
var fs = require('fs');
var path = require('path');

module.exports = function(dir, fileExt, callback) {
  fs.readdir(dir, function(error, files) {
    if (error) {
      return callback(error);
    }
    files = files.filter(function(file) {
      return path.extname(file) === '.' + fileExt;
    });
    callback(null, files);
  });

};
