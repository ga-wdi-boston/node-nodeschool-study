var http = require('http');

var callback1 = '', callback2 = '', callback3 = '';

http.get(process.argv[2], function (response) {
  response.setEncoding('utf8');

  response.on('error', console.error);
  response.on('data', function (data) {
    callback1 += data;
  });
  response.on('end', function () {
    http.get(process.argv[3], function (response) {
      response.setEncoding('utf8');

      response.on('error', console.error);
      response.on('data', function (data) {
        callback2 += data;
      });
      response.on('end', function () {
        http.get(process.argv[4], function (response) {
          response.setEncoding('utf8');

          response.on('error', console.error);
          response.on('data', function (data) {
            callback3 += data;
          });
          response.on('end', function () {
            console.log(callback1);
            console.log(callback2);
            console.log(callback3);
          });
        });
      });
    });
  });
});
