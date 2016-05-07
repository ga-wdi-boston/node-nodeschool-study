'use strict';

let fs = require('fs')

let filename = process.argv[2]

let buf = fs.readFileSync(filename);

let str = buf.toString();


console.log(str.split('\n').length - 1);
