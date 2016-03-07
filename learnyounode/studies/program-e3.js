'use strict'

let fs = require('fs');
let buf = undefined;

fs.readFile(process.argv[2], 'utf-8', function(err, data) {
  buf = data;
  let str = buf.toString();
  console.log(str.split('\n').length-1);
})
