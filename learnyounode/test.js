'use strict';

let fs = require('fs');
let path = require('path');
let dir = process.argv[2];


let readDirectory = function (err, list, file) {
fs.readdir(dir, function(err, list) {
  list.forEach(function (file) {
    if (path.extname(file) === '.' + process.argv[3])
      console.log(file);
  });
});
};

module.exports = {readDirectory};
