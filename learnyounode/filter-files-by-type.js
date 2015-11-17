// Returns a list of file names, filtered by file type
// Takes a file path, extension name, and a callback
// The callback does stuff with our filtered list if there is no error
var listFilesByExt = function listFilesByExt(dir, ext, callback) {
  var fs = require('fs');
  var path = require('path');
  ext = '.' + ext;

  fs.readdir(dir, function(error, files) {
    if (error) {
      return callback(error);
    }
    var filtered = files.filter(function(file) {
      return path.extname(file) === ext;
    });
    callback(null, filtered);
  });

};

module.exports = listFilesByExt;
