var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
  var date = new Date(url.parse(req.url, true).query.iso);
  var result = {};
  var path = url.parse(req.url, true).pathname;

  if(path === '/api/parsetime'){
    result = {
      hour: date.getHours(),
      minute: date.getMinutes(),
      second: date.getSeconds()
    };
  } else if (path === '/api/unixtime'){
    result = {
      unixtime: date.getTime()
    };
  }
  res.writeHead(200, { 'Content-Type': 'application/json' })

  return res.end(JSON.stringify(result));
});

server.listen(process.argv[2]);
