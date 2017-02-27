var fs = require('fs');

fs.readFile(process.argv[2], function(err, data){
  var str = data.toString();

  var arr = str.split('\n');

  console.log(arr.length - 1);
});
