var fs = require('fs');
var path = require('path');

var callback = function callback(err, list) {
  list.forEach(function(file){
    if (path.extname(file) === '.md')
      console.log(file);
  });
};

fs.readdir(process.argv[2], callback);

// OFFICIAL SOLUTION
// var fs = require('fs')
//      var path = require('path')
//      fs.readdir(process.argv[2], function (err, list) {
//        list.forEach(function (file) {
//          if (path.extname(file) === '.' + process.argv[3])
//            console.log(file)
//        })
//      })

