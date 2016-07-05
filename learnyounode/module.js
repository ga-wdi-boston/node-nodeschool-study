'use strict';
var fs = require('fs');

module.exports = function (fileName, extType, callback) {
  return fs.readdir(fileName, (err, list) => {
    if (err) return callback(err);
    let array = [];
    for (let i =0; i<list.length; i ++) {
      if (list[i].includes("." + extType)) {
          array.push(list[i]);
        }
      }
      return callback(null, array);
  })
};
