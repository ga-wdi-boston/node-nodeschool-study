var http = require('http');
var path = process.argv[2];

http.get(path, function(response){
  response.setEncoding('utf8');
  response.on('data', console.log);
  response.on('error', console.error);
});
