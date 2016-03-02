 // Write an HTTP server that serves JSON data when it receives a GET request
 //  to the path '/api/parsetime'. Expect the request to contain a query string
 //  with a key 'iso' and an ISO-format time as the value.

 //  For example:

 //  /api/parsetime?iso=2013-08-10T12:10:15.474Z

 //  The JSON response should contain only 'hour', 'minute' and 'second'
 //  properties. For example:

 //     {
 //       "hour": 14,
 //       "minute": 23,
 //       "second": 15
 //     }

 //  Add second endpoint (an alternate response to handle unixtime) for the path '/api/unixtime' which accepts the same
 //  query string but returns UNIX epoch time in milliseconds (the number of
 //  milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
 //  For example:

 //     { "unixtime": 1376136615474 }

 //  Your server should listen on the port provided by the first argument to
 //  your program.



'use strict';
var http = require('http');
var url = require('url');




// for parsetime, if you recive data from parsetime, parse it like e
var parsetimeData = function(time){
  return {
    "hour": time.getHours(),
    "minute": time.getMinutes(),
    "second": time.getSeconds()
  };
};

// for unixtime, if you recive data from unixtime, parse it like this
var unixtimeData = function(time){
  return { "unixtime": time.getTime() };
};


function requestHandler(request, response) {
  var parsedUrl = url.parse(request.url, true);
  var parsetimeURL = /^\/api\/parsetime/;
  var unixtimeURL = /^\/api\/unixtime/;
  // pass in the url and convert to ISO string
  var time = new Date(parsedUrl.query.iso);
  var result;
  // request.on('data', function(parsedUrl) {
    // test to see if the parse url is coming from api/parsetime
    if (parsetimeURL.test(request.url)) {
      result = parsetimeData(time);
    // test to see if the parse url is coming from api/unixtime
    } else if (unixtimeURL.test(request.url)) {
      result = unixtimeData(time);
    }
  // });
  // request.on('end', function() {
    if (result) {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.end(JSON.stringify(result));
    } else {
      response.writeHead(404);
      response.end();
    }

  // });
}

var server = http.createServer();
server.on('request', requestHandler);

// listen to this port on server
server.listen(Number(process.argv[2]));





