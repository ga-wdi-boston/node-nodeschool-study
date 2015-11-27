var net = require('net');
 var strftime = require('strftime');

var server = net.createServer(function (socket) {
  var createDate = new Date();
  var currentDate = strftime('%Y-%m-%d %H:%M', createDate);
  socket.end(currentDate);

});
server.listen(process.argv[2]);
