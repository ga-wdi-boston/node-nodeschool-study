var net = require('net');
var strftime = require('strftime');

var server = net.createServer(function (socket) {
  var current_date = strftime('%F %R\n');
  socket.end(current_date);
});

server.listen(process.argv[2]);
