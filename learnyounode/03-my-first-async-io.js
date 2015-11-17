var fs = require('fs');

var bufferObj = fs.readFile(process.argv[2], function(err, data){
  var buffer_string = data.toString();
  num = buffer_string.split(/\r\n|\r|\n/).length;
  console.log(num - 1);
});

