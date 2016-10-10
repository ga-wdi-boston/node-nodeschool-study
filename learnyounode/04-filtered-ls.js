'use strict';

const fs = require('fs');
const path = require('path');

let ext = '.' + process.argv[3];

fs.readdir(process.argv[2], function (err, files) {
  if (err) {
      throw err;

  }
  files.forEach(function (file) {
     if (path.extname(file) === ext) {
       console.log(file);
     }
   });
});
