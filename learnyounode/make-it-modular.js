var mymodule = require('./mymodule.js');
var fs = require('fs');

mymodule(process.argv[2], process.argv[3], fs.readdir);
