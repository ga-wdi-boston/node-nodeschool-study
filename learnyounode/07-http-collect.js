const HTTP = require('http');
const bl = require('bl');

let url = process.argv[2];
HTTP.get(url, function(response) {
  response.setEncoding('utf8');
  response.pipe(bl(function (err, data) {
    console.log(data.toString().length);
    console.log(data.toString());
  }));
});
