var fs = require('fs');
var pathname = process.argv[2];
var extension = '.' + process.argv[3];
var path = require('path');

module.exports = function (pathname) {

fs.readdir(pathname, function (err, list) {
  if (err) return;
  list.forEach(function (filename) {
    if (path.extname(filename) === extension) {
      console.log(filename);
    }
  });
  callback(null, data);
});
};
