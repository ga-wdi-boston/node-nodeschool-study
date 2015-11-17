var fs = require('fs');
var path = require('path');

module.exports = function (dirName, ext, callback) {
  var cb = function (error, data) {
    if (error) {
      return callback(error);
    }
    data = data.filter(function(elem) {
      return path.extname(elem) === "." + ext;
    });
    callback(null, data);
  };
  fs.readdir(dirName, cb);
};
