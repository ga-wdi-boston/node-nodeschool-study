var fs = require('fs');
var file = process.argv[2];

// Take 'file', use the readFile method on it, and pass that returned buffered object as data through the callback function
  fs.readFile(file, function(err, data){
    if (err) {
      return err;
    }
    var buf = data.toString().split('\n').length - 1;
    console.log(buf);
  });
