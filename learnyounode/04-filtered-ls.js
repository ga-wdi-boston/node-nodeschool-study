'use strict';

const fs = require('fs');

let dirPath = process.argv[2];
let ext = process.argv[3];


fs.readdir(dirPath, function(err,list) {
  if(err) {
    console.log(err);
  } else {
    let files = list.map((file) => file.split('.'));
    files = files.filter((file) => file[1] === ext);
    files = files.map((file) => file[0] + '.' + file[1]);
    files.map((file) => console.log(file));
  }
});
