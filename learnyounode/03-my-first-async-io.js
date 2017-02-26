var fs = require('fs');
// var count = 0;

var countNewLines = function (err, data) {
  if (err) {
    console.log(err);
    return;
  }

  // count =  (data.split('\n').length -1);
  console.log(data.split('\n').length -1);
};

fs.readFile(process.argv[2], 'utf8', countNewLines);
