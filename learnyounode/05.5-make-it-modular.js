'use strict';

let fs = require('fs');
let path = require('path');

let filterMod = fs.readdir(process.argv[2], function (err, list) {
    if (err) {
      return (err);
    }

    list = list.filter(function (file) {
      return path.extname(file) === '.' + process.argv[3];
    });

      return (null, list);
  });

  module.exports = {
    filterMod
  };
