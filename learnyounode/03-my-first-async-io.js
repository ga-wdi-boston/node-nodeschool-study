var fs = require('fs');
var file = fs.readFile('process.argv[2]');
var callback = file[1];
console.log(file.length);
