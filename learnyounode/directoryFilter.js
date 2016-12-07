'use strict';
var fs = require('fs')
var path = require('path')

module.exports = function (dirName, extName, callback) {

  fs.readdir(dirName, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(file => path.extname(file) === '.' + extName);

    callback(null, list)
  })
};
