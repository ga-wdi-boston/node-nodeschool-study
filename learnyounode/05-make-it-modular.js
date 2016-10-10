'use strict';

const myModule = require('./05-module.js');

let dir = process.argv[2];
let ext = process.argv[3];

const callback = (err, data) => {
  if (err) {
    console.error(err);
  }
  data.forEach(file => console.log(file));
};

myModule(dir, ext, callback);

// Official solution:
//
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]
//
// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error('There was an error:', err)
//   }
//
//   list.forEach(function (file) {
//     console.log(file)
//   })
// })
