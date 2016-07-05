'use strict';

let fs = require('fs');
let path = require('path');

module.exports = function (directory, ext, callback) {
  let extExp = '.' + ext;
  let data = [];
  fs.readdir(directory, function (err, files) {
    if (err) {
      return callback(err);
    };
    files.forEach(function (file) {
      if (path.extname(file) === extExp) {
        data.push(file)
      };
    })
    callback(null, data);
  });
};

//DO NOT CALL THE FUNCTION HERE!! nothing will be passed through
/* Actual asnwer:
var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}


*/
