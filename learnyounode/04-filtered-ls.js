'use strict';

let fs = require('fs');
let path = require('path');

fs.readdir(process.argv[2], function(err, files){
  files.forEach(function(file) {
    if(path.extname(file) === '.' + process.argv[3]) {
      console.log(file)
    }
  });
});

//not working yet, will try again tomorrow
