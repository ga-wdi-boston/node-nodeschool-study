var fs = require('fs');

fs = fs.readFileSync(process.argv[2]).toString().split('\n').length-1;
console.log(fs);
