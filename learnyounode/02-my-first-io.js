var fs = require('fs');

var bufferObj = fs.readFileSync(process.argv[2]);

var buffer_string = bufferObj.toString();

// console.log(buffer_string);

num = buffer_string.split(/\r\n|\r|\n/).length;

console.log(num - 1);
