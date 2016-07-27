'use strict';
 var fs = require('fs');
 var buffer = fs.readFileSync(process.argv[2]);
 var string = buffer.toString();
 console.log(string.split('\n').length - 1);
