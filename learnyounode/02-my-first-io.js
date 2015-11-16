var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2], 'utf-8');
console.log(buffer.split('\n').length - 1);
