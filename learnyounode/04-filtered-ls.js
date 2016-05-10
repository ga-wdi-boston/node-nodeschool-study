'use strict';

var fs = require('fs');

let directoryPath = process.argv[2];
let fileType = process.argv[3];

fs.readdir(directoryPath, function(err, list) {
  for (let i = 0; i < list.length; i++) {
    let fileName = list[i];
    let extension = fileName.split('.');
    if (extension[1] == fileType) {
      console.log(list[i]);
    }
  }
});
