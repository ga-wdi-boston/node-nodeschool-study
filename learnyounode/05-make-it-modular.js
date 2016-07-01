'use strict';

let directory = process.argv[2];
let ext = process.argv[3];

let mod = require('./05-make-it-modular-module');

mod(directory, ext, function (err, data){
  if (err) {
    console.log(err);
  };
  data.forEach(function (file) {
    console.log(file);
  })
});
