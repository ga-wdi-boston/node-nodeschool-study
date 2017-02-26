
var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);
var str = buff.toString().split('\n');
var num = str.length;



console.log(num -1);
