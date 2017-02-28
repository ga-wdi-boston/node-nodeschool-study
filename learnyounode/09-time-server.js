var net = require('net');
var zeroInclude = function(i) {
  if (i < 10) {
    return '0' + i;
  }
  else {
    return '' + i;
  }
};
var now = function() {
  var d = new Date();
  return d.getFullYear() + '-' +
     zeroInclude(d.getMonth() + 1) + '-' +
     zeroInclude(d.getDate()) + ' ' +
     zeroInclude(d.getHours()) + ':' +
     zeroInclude(d.getMinutes());
};
var server = net.createServer( function listener(socket) {
  socket.end(now() + '\n');
});
server.listen(Number(process.argv[2]));
