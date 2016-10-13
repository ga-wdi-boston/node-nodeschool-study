'use strict';
let fs = require('fs');
fs.readFile(process.argv[2], 'utf8', function cb (err, data){
  if (err) {
    console.error(err);
  } else {
    let fileArray = data.split('\n');
    console.log(fileArray.length-1);
  }
});
