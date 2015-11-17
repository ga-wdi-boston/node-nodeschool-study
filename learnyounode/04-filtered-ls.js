var fs = require('fs');
var path = require('path');
var callback = function (err, list) {
  if(err) {
    console.log('Error');
    return;
  } else {
    list.forEach(function (elem) {
      if (path.extname(elem) === "." + process.argv[3]) {
        console.log(elem);
      }
    });
  }
};
fs.readdir(process.argv[2], callback);
