let fs = require('fs');

let doc = fs.readFileSync(process.argv[2]).toString();

let numLines = doc.split('\n');

console.log(numLines.length - 1);
