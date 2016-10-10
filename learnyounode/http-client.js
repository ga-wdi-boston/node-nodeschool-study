var http = require('http');

function callback (response) {
  response.setEncoding("utf8");
  response.on('data', console.log);
  response.on('error', console.error);
}

http.get(process.argv[2], callback);
