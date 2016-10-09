'use strict';

const fs = require('fs');
const path = require('path');

module.exports = function(dir, ext, callback) {
  ext = '.' + ext;

  fs.readdir(dir, function(err, data) {
    if (err) {
      callback(err, null);
    }
    else {
      let filteredList = [];
      data.forEach(function(fileName) {
        if (path.extname(fileName) == ext) {
          filteredList.push(fileName);
        }
      });
      callback(null, filteredList);
    }
  });
};

// Official solution:
//
// var fs = require('fs')
// var path = require('path')
//
// module.exports = function (dir, filterStr, callback) {
//   fs.readdir(dir, function (err, list) {
//     if (err) {
//       return callback(err)
//     }
//
//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })
//
//     callback(null, list)
//   })
// }
