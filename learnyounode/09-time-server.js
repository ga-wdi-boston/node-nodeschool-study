// Write a TCP time server!
//
// Your server should listen to TCP connections on the port provided by the
// first argument to your program. For each connection you must write the
// current date & 24 hour time in the format:
//
//    "YYYY-MM-DD hh:mm"
//
// followed by a newline character. Month, day, hour and minute must be
// zero-filled to 2 integers. For example:
//
//    "2013-07-06 17:42"
//
// After sending the string, close the connection.

var net = require('net');
var fs = require('fs');
var listenPort = process.argv[2];

var server = net.createServer(function (socket) {
  socket.setEncoding('utf8');
  var date = new Date();
  var year = date.getFullYear();
  var month = (date.getMonth()) + 1;
  var day = '0' + date.getDate();
  var hour = date.getHours();
  var min = date.getMinutes();
  var today = year+'-'+month+'-'+day+' '+hour+':'+min+'\n';
  socket.end(today);
});
server.listen(listenPort);
