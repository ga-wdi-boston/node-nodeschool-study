'use strict';

let fs = require('fs');

let file = process.argv[2];

let result = fs.readFile(file, function (err, data) {
  console.log(data.toString().split('\n').length - 1)
});
