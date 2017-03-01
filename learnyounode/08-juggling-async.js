var http = require('http');
var bl = require('bl');
var results = [];

function printResults() {
  for (var i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
}

function getResponse(idx) {
  http.get(process.argv[2 + idx], function(response) {

    response.pipe(bl(function(err, data) {
      if (err) {
        console.error(err);
        return;
      }

      var stringifiedData = data.toString();

      results[idx] = stringifiedData;

      if (results.length === 3) {
        printResults();
      }
    }));
  });
}

for (var i = 0; i < 3; i++) {
  getResponse(i);
}
