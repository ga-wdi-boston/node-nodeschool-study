const HTTP = require('http');

let responseString = '';

let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];

HTTP.get(url1, function(response) {
  response.setEncoding('utf8');
  response.on('data', function(data) {
    responseString = responseString + data;
  });
  response.on('end', function(data) {
    console.log(responseString);

    responseString = '';

    HTTP.get(url2, function(response) {
      response.setEncoding('utf8');
      response.on('data', function(data) {
        responseString = responseString + data;
      });
      response.on('end', function(data) {
        console.log(responseString);

        responseString = '';

        HTTP.get(url3, function(response) {
          response.setEncoding('utf8');
          response.on('data', function(data) {
            responseString = responseString + data;
          });
          response.on('end', function(data) {

            console.log(responseString);
          });
        });
      });
    });
  });
});
