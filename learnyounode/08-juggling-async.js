var bl = require('bl');
var http = require('http');

var urlA = process.argv[2];
var urlB = process.argv[3];
var urlC = process.argv[4];

var error = function (e) {
  console.log(e);
};

var cleanup = function (data) {
  var clean = data.toString();
  console.log(clean);
};

var get = function (url, onSuccess, onFailure) {
  http.get(url, (response) => {
    response.setEncoding('utf8');
    response.pipe(bl((err, data) => {
      onSuccess;
    }));
  })
  .on('error', onFailure);
};

get(urlA, function (data) {

},error();
