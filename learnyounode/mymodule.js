var fs = require('fs');
var path = require('path');

module.exports = function mymodule(directory, fileExtension, callback) {
  var ext = '.' + fileExtension;
  callback(directory, function (error, list) {
    if (error) {
      return callback(error);
    }
    for (var i = 0; i < list.length; i++) {
      if (path.extname(list[i]) === ext) {
        console.log(list[i]);
      }
    }
  });
};
