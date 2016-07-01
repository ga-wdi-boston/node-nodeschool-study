'use strict';

var fs = require('fs');

function readThisFile() {
  fs.readFile(process.argv[2], function doneReading(err, fileContents) {
  let str = fileContents.toString();
  let arr = str.split('\n');
  console.log(arr.length -1);
      })
};



let buf = readThisFile();

console.log(buf);


// let str = buf.toString();
//
// let arr = str.split('\n');
//
// console.log(arr.length -1);
