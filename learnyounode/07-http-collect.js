// first line will be integer representing # of characters from server
// second line is string of chars from server

var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function callback (response){
  response.pipe(bl(function (err, data) {
    if (err) {
      console.error(err);
    }

    console.log(data.toString().length);
    console.log(data.toString());
  }));
});
