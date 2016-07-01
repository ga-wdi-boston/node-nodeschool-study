// You must write a module file to do most of the work. The module must
// export a single function that takes three arguments: the directory name,
// the filename extension string and a callback function, in that order. The
// filename extension argument must be the same as what was passed to your
// program. Don't turn it into a RegExp or prefix with "." or do anything
// except pass it to your module where you can do what you need to make your
// filter work.

var fs = require('fs');
var path = require('path');

module.exports = function (directoryName, extension, callBack) {
  var resultArray = fs.readdir(directoryName, callBack);
  return resultArray;
};
