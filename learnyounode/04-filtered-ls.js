'use strict';

const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], function(err, list) {
  if (err) {
    console.log(err);
  } else {
      for (let i = 0; i < list.length; i++) {
        if (path.extname(list[i]) === '.' + process.argv[3]) {
          console.log(list[i]);
        }
      }
  }
});
