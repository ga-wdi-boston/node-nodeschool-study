'use strict';

let fs = require('fs');
const callback = require('./modularFunction.js')

let ext = process.argv[3];

fs.readdir(process.argv[2], callback(process.argv[2], ext, function {
  if (err) return console.error(err);
  }
));
