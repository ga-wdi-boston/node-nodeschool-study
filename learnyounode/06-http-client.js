var http = require('http');
var callback = function (response) {
  response.setEncoding('utf8');
  response.on('error', function (error) {
    return console.error('There was an error');
  });
  response.on('data', function (data) {
    console.log(data);
  });
  response.on('end', function (end) {
    return;
  });
};

http.get(process.argv[2], callback);
