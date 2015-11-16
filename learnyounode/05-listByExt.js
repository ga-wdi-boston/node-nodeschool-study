var fs = require('fs');
var path = require('path');

module.exports = function (dirName, ext, callback) {
  var result = [];
  var cb = function(err, list) {
    if (err) {
      return callback(err);
    }
    list.forEach(function(file) {
      if(path.extname(file) === '.' + ext) {
        return result.push(file);
      }
    });

    callback(null, result);
  };
  fs.readdir(dirName, cb);
};
