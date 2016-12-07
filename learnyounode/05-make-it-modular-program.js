'use strict';
// Create a program that prints a list of files in a given directory,
// filtered by the extension of the files. The first argument is the
// directory name and the second argument is the extension filter. Print the
// list of files (one file per line) to the console. You must use
// asynchronous I/O.


// load mymodule and the fs module from the Node core library
var myModule = require('./05-make-it-modular.js')
var fs = require('fs');

// let myArray = (mymodule(process.argv[2], process.argv[3], fs.readdir));
// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

myModule(process.argv[2], process.argv[3], function(err, data) {
  if (err) {
    console.error(err.stack);
  }
  data.forEach(function (file) {
    console.log(file);
  });
});
