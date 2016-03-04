var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]).toString().split('\n').length-1;

console.log(buf);


// var fs = require('fs')
//
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)
