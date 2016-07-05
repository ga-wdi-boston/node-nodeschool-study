'use strict';

let fs = require('fs');
let path = require('path');

let directory = process.argv[2];
let extension = process.argv[3];

module.exports = (directory, extension, callback) => {
  let filteredFiles = [];

  fs.readdir(directory, (error, list) => {
    if (error) {
      return callback(error);
    }

    list.forEach((filename) => {
      if (path.extname(filename) === '.' + extension) {
        filteredFiles.push(filename);
      }
    });
    callback(null, filteredFiles);
  });
};
