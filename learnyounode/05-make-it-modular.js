

var mymodule = require('./05-make-it-modular-file2.js');
var pathName = process.argv[2];
var filter = process.argv[3];

//  directory name and the second argument is the extension filter. Print the
//  list of files (one file per line) to the console. You must use
//  asynchronous I/O.
var callback = function callback (err, data){
  if (err)
    return console.error('There was an error:', err)

    for (var i=0; i < data.length; i++) {
          console.log(data[i]);

    }
};

mymodule(pathName, filter, callback);

