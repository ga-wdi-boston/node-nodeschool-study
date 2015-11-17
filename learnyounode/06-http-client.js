var http = require('http');
var url = process.argv[2];

var callback = function callback(response) {
  response.setEncoding("utf8");
  response.on("data", function(data) {
    console.log(data);
  });
};

http.get(url, callback);

// OFFICIAL SOLUTION
// var http = require('http')
//      http.get(process.argv[2], function (response) {
//        response.setEncoding('utf8')
//        response.on('data', console.log)
//        response.on('error', console.error)
//      })
//
