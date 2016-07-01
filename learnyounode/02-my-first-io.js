'use strict';

let fs = require('fs');

let file = process.argv[2];

const readFile = function () {
  let result;
  result = fs.readFileSync(file);
  console.log((result.toString()).split('\n').length - 1);
};

readFile();
