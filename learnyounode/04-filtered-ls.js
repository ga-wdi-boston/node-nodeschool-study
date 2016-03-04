'use strict';
let fs = require('fs');
let path = require('path');
let dir = process.argv[2];
let type = "." + process.argv[3];

fs.readdir(dir, function(err, files) {
  files.forEach(function(file){
    if (path.extname(file) === type){
      console.log(file);
    }
  });
});
