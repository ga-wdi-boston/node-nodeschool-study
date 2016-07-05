'use strict';

var fs = require('fs');

let buf = fs.readFileSync(process.argv[2]);

let str = buf.toString();

// console.log(str)


let arr = str.split('\n');
//
// console.log (arr);
console.log(arr.length -1);
