'use strict'

let fs = require('fs');

let path = process.argv[2];

let data = fs.readFileSync(path).toString().split('\n');
console.log(data.length-1);
