var fs = require('fs');
var filename = process.argv[2];


var callback = function callback (err, data){
  if (!err) {
    var splitted = data.split('\n')
    console.log(splitted.length-1);
  }

};


fs.readFile(filename, 'utf8', callback);

