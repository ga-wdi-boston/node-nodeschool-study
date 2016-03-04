var fs = require('fs');
var file = fs.readFileSync(process.argv[2]).toString();
file = file.split('\n');
file.pop();
console.log(file.length);
