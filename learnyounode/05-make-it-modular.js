var fs = require('fs');
var myModule = require('./my-module');

var dirPath = process.argv[2];
var fileType = process.argv[3];
var callback = function(err, list) {
  if (err) throw err;

  list.forEach(function (file) {
      console.log(file);
  });
};

myModule(dirPath, fileType, callback);
