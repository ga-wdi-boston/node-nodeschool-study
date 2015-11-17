var mymodule = require('./05-make-it-modular.js');
var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var filterExt = process.argv[3];

mymodule(dir, filterExt, function(err, list){
  if (err)
    return console.error('There was an error:', err);

  list.forEach(function (file) {
    console.log(file);
  });
});
