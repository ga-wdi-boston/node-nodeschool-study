'use strict';

const fs = require('fs');

let reader = (file) => {
  return fs.readFileSync(file).toString().split('\n').length - 1
}

reader(process.argv[2]);
