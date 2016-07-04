var fs = require('fs');

var readFile = fs.readFileSync(process.argv[2]);
var string = contents.toString().split('\n').length - 1;
console.log(string);
