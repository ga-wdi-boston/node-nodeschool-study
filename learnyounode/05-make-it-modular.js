/*
Create a new module by creating a new file that just contains your
  directory reading and filtering function. To define a single function
  export, you assign your function to the module.exports object, overwriting
  what is already there:
*/

var filteredLS = require('./04-filtered-ls.js');
var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];

filteredLS(dir, ext, function(err, data) {
  if (err) {
    console.log(err);
  }
  data.foreach(function (file) {
    console.log(file);
  });
});
