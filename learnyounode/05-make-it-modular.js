'use strict';

let myModule = require('./05-module.js');

let path = require('path');
let directory = process.argv[2];
let ext1 = process.argv[3]
let array = [];

let filter = function (err, list) {
    if (err) return console.error(err);

    list.forEach(function(filename) {
      let ext = path.extname(filename);
      if (ext === ext1) {
        array.push(filename);
      }
      return list;
    });
};


myModule(directory, ext1, filter);
