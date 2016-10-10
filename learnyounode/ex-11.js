'use strict';

let http = require('http');
let fs = require('fs');

let file = process.argv[2];

http.createServer(function(req, res) {
	fs.createReadStream(file).pipe(res);
});

server.listen(9862);
