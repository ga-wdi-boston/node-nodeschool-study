'use strict';

let fs = require('fs');

module.exports = function(directory, extension, callback) {
  fs.readdir(directory, function(err, data) {
    if (err) return callback(err, null);
    let list = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].search(`.${extension}`) !== -1) {
        list.push(`${data[i]}`);
      }
    }
    callback(null, list);
  });
};
