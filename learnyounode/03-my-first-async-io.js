var fs = require('fs')

var readFile = fs.readFile(process.argv[2], function callback(err, contents){
  if(err) {
    console.log(err)
  } else {
    console.log(contents.toString().split('\n').length-1);
  }
});
