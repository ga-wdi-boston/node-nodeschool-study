let fs = require('fs');

let buf = fs.readFileSync(process.argv[2]);
let count = buf.toString().split("\n").length;
if (count > 0) count -= 1;
console.log(count);
