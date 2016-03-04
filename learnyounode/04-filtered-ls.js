'use strict';
let fs = require('fs');
let path = require('path');
let dir = process.argv[2];
let type = "." + process.argv[3];

fs.readdir(dir, function(err, files) {
  let correctFiles = [];
  for (let i = 0; i = files.length; i ++){
    if (path.extname(files[i]) === type){
      correctFiles.push(files[i]);
    }
  }
  console.log(correctFiles);
});
