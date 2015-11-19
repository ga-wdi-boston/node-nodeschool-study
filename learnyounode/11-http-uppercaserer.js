var http = require('http');

var postHandler = function (request, response) {
  request.on('data', function(data) {
    var transform = data.toString().toUpperCase();
    response.write(transform);
  });
  request.on('end', function() {
    response.end();
  });
};

var server = http.createServer();

server.on('request', postHandler);

server.listen(process.argv[2], function () {
  console.log("Listening");
});
