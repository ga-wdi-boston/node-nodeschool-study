var net = require('net');

var noFill = function (i) {
  return (i < 10 ? '0' : '') + i;
};

var now = function () {
  var date = new Date();
  return date.getFullYear() + '-' +
    noFill(date.getMonth() + 1) + '-' +
    noFill(date.getDate()) + ' ' +
    noFill(date.getHours()) + ':' +
    noFill(date.getMinutes());
};

var server = net.createServer(function (socket) {
  socket.end(now() + '\n');
});

server.listen(Number(process.argv[2]));
