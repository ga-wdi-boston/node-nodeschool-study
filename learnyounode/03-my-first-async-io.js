var fs = require('fs');

var content = function(error, data) {
    if (error)
      return console.log(error);
    console.log(data.toString().split('\n').length-1);
};

fs.readFile(process.argv[2], content);
