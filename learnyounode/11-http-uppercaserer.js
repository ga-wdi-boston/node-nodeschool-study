'use strict';

var http = require('http');


function requestHandler(request, response) {
    var reqData = '';
    request.setEncoding('utf8');
    request.on('data', function(d) {
        reqData += d;
    });
    request.on('end', function() {
        response.write(reqData.toString().toUpperCase().split('').join(''));
        response.end();

    });
}

var server = http.createServer();
server.on('request', requestHandler);

server.listen(process.argv[2], function listenCallback() {
    console.log("Now listening.");
});

