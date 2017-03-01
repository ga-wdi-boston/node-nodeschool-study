let fs = require('fs');

let readDocument = fs.readFileSync(process.argv[2]);
let documentLines = readDocument.toString().split('\n').length-1;
console.log(documentLines);
