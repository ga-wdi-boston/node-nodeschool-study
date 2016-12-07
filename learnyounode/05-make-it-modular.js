'use strict';
var directoryFilter = require('./directoryFilter.js');
var dirName = process.argv[2];
var extName = process.argv[3];

directoryFilter(dirName, extName, function (err, list) {
  if (err) {
    return console.error('There was an error:', err)
  };

  list.forEach(file => console.log(file));
});
