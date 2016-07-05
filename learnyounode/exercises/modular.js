var fs = require('fs');
var path = require('path');
var mymodule = require('./mymodule.js');

var filePath = process.argv[2];
var extension = process.argv[3];

mymodule(filePath, extension, function(err, list) {
  if (err) {
    return console.error('there was an error', err);
  } else {
    list.forEach(file => console.log(file));
  }
});
