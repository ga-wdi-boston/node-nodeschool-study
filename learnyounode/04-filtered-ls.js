'use strict';

let fs = require('fs');
let path = require('path');

fs.readdir(process.argv[2], (error, list) => {
  list.forEach((filename) => {
    if (path.extname(filename) === '.' + process.argv[3]) {
      console.log(filename);
    }
  });
});
