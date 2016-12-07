'use strict';

// load the fs and path modules from the Node core library
var fs = require('fs');
var path = require('path');

let myArray = [];

module.exports = function (dir, ext, callback) {
  callback(dir, (err, list) => {
    if (err) throw err;
    for (let i = 0; i < list.length; i++) {
      if (path.extname(list[i]) === '.' + ext) {
        myArray.push(list[i]);
      }
    }
    return myArray;
  });
};
