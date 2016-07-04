'use strict'
let fs = require('fs');


let buf = fs.readFileSync(process.argv[2]);

let str = buf.toString();

let arr = str.split(/\n/);

let num = arr.length - 1;
console.log(num);

return num;
