var fs = require('fs');
var str = fs.readFileSync(process.argv[2]).toString().split('\n');
console.log(str.length - 1);
