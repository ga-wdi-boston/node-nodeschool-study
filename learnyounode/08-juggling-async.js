var http = require('http');

var cb1 = '';
var cb2 = '';
var cb3 = '';
http.get(process.argv[2], function callback(response) {
  response.setEncoding('utf8');
  response.on("data", function(data) {
    cb1 += data;
  });
  response.on("end", function() {
    http.get(process.argv[3], function callback(response) {
      response.setEncoding('utf8');
      response.on("data", function(data) {
        cb2 += data;
      });
      response.on("end", function() {
        http.get(process.argv[4], function callback(response) {
          response.setEncoding('utf8');
          response.on("data", function(data) {
            cb3 += data;
          });
          response.on("end", function() {
            console.log(cb1);
            console.log(cb2);
            console.log(cb3);
          });
        });
      });
    });
  });
});
