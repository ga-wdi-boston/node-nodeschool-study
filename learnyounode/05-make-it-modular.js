'use strict';

var filterFn = require('./05.5-make-it-modular.js');
var direc = process.argv[2];
var filter = process.argv[3];

filterFn(direc, filter, function (err, list) {
  if (err) {
    return console.error('An error has occured', err);
}
  list.forEach(function (file) {
    console.log(file);
  });
});
