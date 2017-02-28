var fs = require('fs');
var path = require('path');

module.exports = function (dirName, extension, callback) {
  var matchingFiles = [];

  fs.readdir(dirName, function (err, files) {
    if (err) {
      return callback(err);
    }

    for (var i = 0; i < files.length; i++) {
      if (path.extname(files[i]) === ('.' + extension)) {
        matchingFiles.push(files[i]);
      }
    }

    callback(null, matchingFiles);
  });
};
