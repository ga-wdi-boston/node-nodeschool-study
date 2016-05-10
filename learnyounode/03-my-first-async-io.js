'use strict';

let fs = require('fs');
let file = process.argv[2];
fs.readFile(file, 'utf8', function(err, data){
  let splitStr = data.toString().split('\n');
  console.log(splitStr.length-1);
});
