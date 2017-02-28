var fs = require('fs');
var path = require('path');

module.exports = function(directory, extString, callback) {
  fs.readdir(directory, function (err, list) {
    if (err) return callback (err);
    data = list.filter(function(file) {
      return path.extname(file) === '.' + extString;
    });
    callback(null, data);
  });
};
