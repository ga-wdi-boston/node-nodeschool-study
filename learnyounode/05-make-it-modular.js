'use strict';

let filt = require('./04-filtered-ls.js');

let filename = process.argv[2];
let ext = process.argv[3];

filt(filename, ext, function(err, files) {
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});
