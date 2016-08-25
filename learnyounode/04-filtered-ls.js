var fs = require('fs');
var file = process.argv[2];
var fil = process.argv[3];

fs.readdir(file, function (err, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].includes('.' + fil) === true) {
      console.log(arr[i]);
    }
  }
});




  // var fs = require('fs')
  // var path = require('path')
  //
  // var folder = process.argv[2]
  // var ext = '.' + process.argv[3]
  //
  // fs.readdir(folder, function (err, files) {
  //   if (err) return console.error(err)
  //   files.forEach(function(file) {
  //       if (path.extname(file) === ext) {
  //           console.log(file)
  //       }
  //   })
  // })
