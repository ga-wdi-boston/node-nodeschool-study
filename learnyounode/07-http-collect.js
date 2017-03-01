var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function(response) {
  response.on('error', console.error);

  response.pipe(bl(function(err, data) {
    const stringifiedData = data.toString();
    console.log(stringifiedData.length);
    console.log(stringifiedData);
  }));
});
