'use strict';

const filterFunction = require('./05-2-make-it-modular');
const dir = process.argv[2];
const filterString = process.argv[3];

filterFunction(dir, filterString, function (err, list) {
  if (err) return console.error(err);

  list.forEach(function (file) {
    console.log(file);
  })
})
