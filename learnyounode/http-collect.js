var http = require('http');

var string = '';

function callback (response) {
  if (response.finished) {
    console.log(string);
  } else {
    response.setEncoding("utf8");
    response.on('data', function (data) {
      string += data;
    });
    response.on('error', console.error);
  }
}


http.get(process.argv[2], callback);
