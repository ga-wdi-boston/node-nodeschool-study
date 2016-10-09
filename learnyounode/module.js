// first arg - directory name
// second arg = extension filter

// module function to take three args:
// 1. the directory name
// 2. the filename extension (which we need to prefix in the module)
// 3. the callback function
var fs = require('fs');
var path = require('path');


function filter_files (folder, extension, callback) {
  res = [];
  fs.readdir(folder, function (err, list) {
    if (err) {
      return callback(err);
    }
    list = list.filter(function (file) {
      return path.extname(file) === '.' + extension;
    });
    callback(null, list);
  });
}

module.exports = filter_files;
