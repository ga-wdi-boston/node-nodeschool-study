const fs = require('fs');
const path = require('path');
// need to require the proper files so they can be used

// to define a single function to export, need to assign function to module.exports
module.exports = function (dir, filterStr, callback) {

// need to use the read directory function to read the file
  fs.readdir(dir, function (err, list) {

    // if statement to define what to do when there is an error
    if (err)
    return callback(err);

// need to use the filter function to
    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr;
    });
    callback(null, list);
  });
};
