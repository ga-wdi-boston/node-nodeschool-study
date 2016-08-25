
var fs = require('fs');

function callback (err, data) {
  if(err){
    return data.toString().split('\n').length;
    console.log(data.toString().split('\n').length);
  }
}


fs.readFile(utf8, callback(err, utf8));
