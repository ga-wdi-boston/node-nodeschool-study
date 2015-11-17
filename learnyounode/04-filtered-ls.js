var fs = require('fs');

var directory = process.argv[2];
var extension = process.argv[3];
var extFilter = new RegExp('\\.' + extension + '$');

fs.readdir(directory, function (err, list) {
  list.forEach(function (item){
    if (extFilter.test(item)) {
      console.log(item);
    }
  });
});

