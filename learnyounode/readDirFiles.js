'use strict';

let fs = require('fs');


fs.readdir(process.argv[2], function (err, list) {

  let ext = process.argv[3].length;

  list.forEach( function (file) {
    if (file.slice(-ext) === process.argv[3]) {
      console.log(file);
    };
  });
});
