'use strict';

// load the fs and path modules from the Node core library
var fs = require('fs');
var path = require('path');

let myArray = [];

module.exports = function (dir, ext, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) {
      return callback(err);
    }
    list = list.filter(function (file) {
      return path.extname(file) === ('.' + ext);
    });
    // for (let i = 0; i < list.length; i++) {
    //   if (path.extname(list[i]) === '.' + ext) {
    //     myArray.push(list[i]);
    //   }
    // }
    callback(null, list);
  });
};
