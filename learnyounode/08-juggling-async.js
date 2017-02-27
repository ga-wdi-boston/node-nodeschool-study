const HTTP = require('http');
const bl = require('bl');

let url1 = process.argv[2];
let url2 = process.argv[3];
let url3 = process.argv[4];

HTTP.get(url1, function(response) {
  response.setEncoding('utf8');
  response.pipe(bl(function (err, data) {
    console.log(data.toString());
    HTTP.get(url2, function(response) {
      response.setEncoding('utf8');
      response.pipe(bl(function(err, data) {
        console.log(data.toString());
        HTTP.get(url3, function(response) {
          response.setEncoding('utf8');
          response.pipe(bl(function(err, data) {
            console.log(data.toString());
          }));
        });
      }));
    });
  }));
});
