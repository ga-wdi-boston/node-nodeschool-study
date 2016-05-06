
var fs = require('fs');

module.exports = function (dirPath, fileExtension, callback) {

  fs.readdir(dirPath, function (err, list) {
    if (err) return callback(err);

    var response = [];
    list.forEach(function (file) {
      if (file.split('.').length > 1 && file.split('.').pop() === fileExtension)
        response.push(file);
    });

    callback(null, response);
  });
};


// module.exports = function(dir, ext, cb) {
//   var fs = require('fs'),
//       ext = '.' + ext;
//
//   fs.readdir(dir, function(err, list) {
//     if (err) {
//       return cb(err);
//     }
//
//     var results = [];
//     list.forEach(function(item) {
//       if (item.indexOf(ext) > -1) {
//         results.push(item);
//       }
//     });
//
//     cb(null, results);
//   });
// };
