var http = require('http');

http.get(process.argv[2], function (response) {
  var concatData = '';

  response.setEncoding('utf8');
  response.on('error', console.error);
  response.on('data', function (data) {
    concatData += data;
  });

  response.on('end', function () {
    console.log(concatData.length);
    console.log(concatData);
  });
});
