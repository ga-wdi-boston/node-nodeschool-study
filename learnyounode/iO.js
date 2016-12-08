
'use strict'
let fs = require('fs');

let filePath = process.argv[2];

let file = fs.readFileSync(filePath);

let lines = file.toString().split("\n");

let newLines = -1;
for(let i in lines) {
 newLines += 1;
}

console.log(newLines);
