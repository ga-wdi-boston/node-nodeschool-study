'use strict';

var net = require('net');
var moment = require('moment');

// var server = net.createServer(function (socket) {
//   socket.end(moment().format('YYYY-MM-DD HH:mm') + '\n');
// });
//
// server.listen(8000);

// console.log(process.argv[2]);
let port = process.argv[2];


var server = net.createServer(function (socket) {
    socket.end(moment().format('YYYY-MM-DD HH:mm') + '\n');
});
server.listen(port);
