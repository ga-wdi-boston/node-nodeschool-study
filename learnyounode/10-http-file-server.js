var fs = require('fs');
var http = require('http');

var fileRead = function(req, res){
  var readStream = fs.createReadStream(process.argv[3], 'utf8');
  readStream.on('open', function(){
    readStream.pipe(res);
  });
};

var server = http.createServer(fileRead);

server.listen(process.argv[2]);
