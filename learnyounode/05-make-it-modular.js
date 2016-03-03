'use strict';

var mymodule = require('./mymodule.js');
var pathname = process.argv[2]; // directory name as first argument to your program
var type = process.argv[3]; // file extension to filter by as second argument

mymodule(pathname, type);

// Need to create two files to solve this.

// to import our own files, give relative path
// to import modules registered with npm, give a name
