const HTTP = require('http');

let responseString = '';

let url = process.argv[2];
HTTP.get(url, function(response) {

  response.setEncoding('utf8');

  response.on('data', function(data) {

    responseString = responseString + data;
  });

  response.on('end', function() {
    console.log(responseString.length);
    console.log(responseString);
  });
});
