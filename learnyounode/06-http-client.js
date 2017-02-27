const HTTP = require('http');

let url = process.argv[2];
HTTP.get(url, function(response) {
  response.setEncoding('utf8');
  response.on('data', function(chunk) {
    console.log(chunk);
  });
});
