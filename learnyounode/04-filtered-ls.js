'use strict';

const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], function (err, list) {
  if (err) return console.error(err);
  // let print = '';

  for (let i = 0, max = list.length; i < max; i++) {
    if (path.extname(list[i]) === ('.' + process.argv[3])) {
      console.log(list[i]);
    }
  }

  // console.log(print);
});
