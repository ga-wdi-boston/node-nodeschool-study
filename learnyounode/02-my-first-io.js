
 // var fs = require('fs');
//
// let str = '';
// console.log(str.split(/\r\n|\r|\n/).length);

// fs.readFileSync('/path/to/file');
// var str = buf.toString();


var fs = require('fs')

var contents = fs.readFileSync(process.argv[2]);
var lines = contents.toString().split('\n').length - 1;
console.log(lines);
