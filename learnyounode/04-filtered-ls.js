var fs = require('fs');
var pathName = process.argv[2];
var filter = process.argv[3];
filter = '.' + filter;



var callback = function callback (err, data){
  if (!err) {
    // var splitted = data.split('\n')
    // console.log(splitted.length-1);

    for (var i=0; i < data.length; i++) {
        if (data[i].lastIndexOf(filter) > -1)
          console.log(data[i]);

    }
  }
};


var buffer = fs.readdir(pathName, callback);
