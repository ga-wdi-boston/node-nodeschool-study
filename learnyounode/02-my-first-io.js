var fs = require('fs')

var filename = process.argv[2]
var buf = fs.readFileSync(filename)
var str = buf.toString();
var count = str.split('\n').length

console.log(count - 1);
