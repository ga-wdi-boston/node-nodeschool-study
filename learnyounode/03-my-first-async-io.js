'use strict'
let fs = require('fs');


fs.readFile(process.argv[2], function callback (err, buf) {
  if (!err) {
    let str = buf.toString();
    let arr = str.split(/\n/);
    let num = arr.length - 1;
    console.log(num);
    return num;
  }
});
