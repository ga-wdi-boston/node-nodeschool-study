var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {

    if (err)
      return console.error(data);

    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});

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
