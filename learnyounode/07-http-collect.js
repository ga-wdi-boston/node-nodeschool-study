const http = require('http');
const bl = require('bl');
// require proper files

// use http and get method to call the process.argv[2] and the function

http.get(process.argv[2], function (response) {
  response.pipe(bl(function (err, data) {
    if (err)
      return console.error(err);
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }));
});
