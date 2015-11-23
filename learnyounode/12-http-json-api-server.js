// Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.
// For example:  /api/parsetime?iso=2013-08-10T12:10:15.474Z
// Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
// For example:  { "unixtime": 1376136615474 }
// The JSON response should contain only 'hour', 'minute' and 'second' properties.
// For example:  { "hour": 14, "minute": 23, "second": 15 }


var http = require('http');
var url = require('url');

function handler (request, response) {
  // set the Content-Type properly
  res.writeHead(200, { 'Content-Type': 'application/json' })
  var path = '/api/parsetime';
  var path2 = '/api/unixtime';
  // will parse content, provide an object with properties
  var requestedUrl = url.parse(request.url, true);
  if (requestedUrl.pathname === path) {
    //in here, we are parsing time
    requestedUrl.query[iso]
  } else if (requestedUrl.pathname === path2) {
    //in here, we are doing unixtime
  }
};
var server = http.createServer(handler);
server.listen(process.argv[2]);


JSON.stringify()  // response in JSON string format
new Date().toISOString()  // can print dates in ISO format
Date#getTime()


// url module

url.parse(urlStr, [parseQueryString], [slashesDenoteHost])
Take a URL string, and return an object.

Pass true as the second argument to also parse the query string using the querystring module. Defaults to false.

Pass true as the third argument to treat //foo/bar as { host: 'foo', pathname: '/bar' } rather than { pathname: '//foo/bar' }. Defaults to false.


// file:///Users/faetea/.nvm/versions/node/v4.1.1/lib/node_modules/learnyounode/node_apidoc/url.html
