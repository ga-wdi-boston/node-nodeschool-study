'use strict';

const fs = require('fs');

let text = fs.readFileSync(process.argv[2]);

console.log(text.toString().split('\n').length - 1)
