'use strict';
const mod = require('./make-it-modular.js')

mod(process.argv[2], process.argv[3], console.log);

// print a list of files in a directory
// filter by file extension
// arg1 is directory name
// arg2 is extension name
//
// arg3 is a callback (it will be a console log)
// dont export your filter
