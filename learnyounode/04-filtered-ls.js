const fs = require('fs');
const path = require('path');

// console.log(process.argv[2], process.argv[3]);
let ext = process.argv[3];
const extReader = function (err, list) {
  for (let i = 0; i < list.length; i++) {
    if (path.extname(list[i]) === '.' + ext) {
      console.log(list[i] + '');
    }
  }
};

fs.readdir(process.argv[2], extReader);
