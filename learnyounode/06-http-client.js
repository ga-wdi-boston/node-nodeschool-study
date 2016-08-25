var http = require('http');

//we are invoking it with response, http request, gave it a callback that is
// is string, setEncoding to utf8, if we get errror, just error
// on data, console.log data
http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.on('error', function(err) {
    console.error(err);

  });
  response.on('data', function(data){
    console.log(data);
  });
});
