  'use strict';

  let fs = require('fs');

  let path = require('path');

  let folder = process.argv[2];

  fs.readdir(folder, function(err, data) {
    if (err) {
      return console.log(err);
    } else {
    data.forEach(function(filename) {
      if (path.extname(filename) === "." + process.argv[3]) {
        console.log(filename);

      }
    });
  }});
