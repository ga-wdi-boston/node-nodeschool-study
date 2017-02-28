var http = require('http');
var bl = require('bl');
var result = [];
var count = 0;

var printResult = function() {
  for (var i = 0; i < 3; i++) {
    console.log(result[i]);
  }
};

var getHttp = function(index) {
  http.get(process.argv[2 + index], function(response) {
    response.pipe(bl(function(error, data) {
      if (error) {
        console.error(error);
      }
      result[index] = data.toString();
      count++;
      if (count === 3) {
        printResult();
      }
    }));
  });
};

for(var i = 0; i < 3; i++) {
  getHttp(i);
}
